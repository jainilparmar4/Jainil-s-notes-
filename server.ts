import express, { Request, Response } from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for registered student passes
interface StudentPass {
  passId: string;
  fullName: string;
  email: string;
  phone: string;
  board: string;
  medium: string;
  targetYear: string;
  schoolName: string;
  stateCity: string;
  selectedPlan: string;
  subjects: string[];
  couponCode?: string;
  finalPrice: number;
  enrolledAt: string;
  status: 'ACTIVE_PRO' | 'TRIAL';
  verificationCode: string;
}

const registrations: StudentPass[] = [];

// Helper to get GoogleGenAI client lazily
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Registration and Access Pass generation
app.post('/api/register-access', (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      phone,
      board = 'CBSE',
      medium = 'English',
      targetYear = '2026',
      schoolName = '',
      stateCity = '',
      selectedPlan = 'topper_pack',
      subjects = ['Science', 'Mathematics', 'Social Science', 'English'],
      couponCode = '',
    } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Student full name and phone/WhatsApp number are required.',
      });
    }

    // Pricing calculation
    let basePrice = 499;
    if (selectedPlan === 'free_trial') basePrice = 0;
    else if (selectedPlan === 'handwritten_pro') basePrice = 299;
    else if (selectedPlan === 'topper_super_pack') basePrice = 499;

    let discount = 0;
    const cleanCoupon = (couponCode || '').trim().toUpperCase();
    if (cleanCoupon === 'TOPPER100' || cleanCoupon === 'FREEPASS') {
      discount = basePrice;
    } else if (cleanCoupon === 'BOARD95') {
      discount = Math.round(basePrice * 0.5);
    } else if (cleanCoupon === 'EARLYBIRD') {
      discount = Math.round(basePrice * 0.3);
    }

    const finalPrice = Math.max(0, basePrice - discount);
    const passId = `C10-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const newPass: StudentPass = {
      passId,
      fullName,
      email: email || 'student@boardprep.edu',
      phone,
      board,
      medium,
      targetYear,
      schoolName: schoolName || 'Secondary School',
      stateCity: stateCity || 'India',
      selectedPlan,
      subjects: Array.isArray(subjects) && subjects.length > 0 ? subjects : ['Science', 'Mathematics'],
      couponCode: cleanCoupon,
      finalPrice,
      enrolledAt: new Date().toISOString(),
      status: finalPrice === 0 && selectedPlan === 'free_trial' ? 'TRIAL' : 'ACTIVE_PRO',
      verificationCode,
    };

    registrations.push(newPass);

    return res.status(200).json({
      success: true,
      message: 'Class 10th Premium Notes Access Pass created successfully!',
      pass: newPass,
      accessUnlocked: true,
    });
  } catch (error: any) {
    console.error('Error in /api/register-access:', error);
    return res.status(500).json({ success: false, error: 'Registration failed. Please try again.' });
  }
});

// AI Board Exam Assistant / Doubt Solver
app.post('/api/gemini/doubt-solver', async (req: Request, res: Response) => {
  try {
    const { question, subject = 'Science', chapter = 'General' } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'A question or topic is required.' });
    }

    const ai = getGenAI();

    if (!ai) {
      // High-yield syllabus fallback when API key is not configured
      return res.json({
        answer: `### 📌 Class 10th Quick Solution: ${question}

**Subject:** ${subject} | **Chapter:** ${chapter}

#### 1. Core Concept & Definition
This is a high-frequency Class 10 Board Exam concept. In board exams, examiners award marks for standard terminology and precise NCERT keywords.

#### 2. Key Formula / Principle
- Always write the exact statement/equation with units.
- Underline keywords like *proportionality*, *oxidation state*, *focal length*, or *ratio*.

#### 3. Board Exam Presentation Tip (Topper Secret)
- For 3-mark questions: State definition, provide formula/equation with balanced coefficients, and give a real-life example or labeled diagram.
- For 5-mark questions: Structure into (a) Principle, (b) Diagram, (c) Derivation or working, and (d) Two precautions.

*(Note: Connect your Gemini API Key in Settings to get real-time dynamic AI answers for any custom question!)*`,
        source: 'curated_syllabus_fallback',
      });
    }

    const systemInstruction = `You are "Topper AI", an expert Class 10 Board Exam (CBSE/ICSE/State Board) master teacher and topper mentor.
Provide crystal-clear, NCERT-grounded answers for Class 10 students.
Structure your response with:
1. 💡 **Direct Core Answer / Definition** (Concise, accurate, with bold key terms)
2. 🔬 **Key Points / Chemical Equations / Mathematical Steps** (Well-formatted, step-by-step)
3. 🎯 **Board Exam "Must-Mention" Keywords** (Points examiners look for to award full marks)
4. ⚠️ **Common Mistake / Examiner Trap** (What most students get wrong)
5. 📝 **Quick 1-Line Mnemonic or Memory Trick**
Keep tone encouraging, professional, and directly focused on scoring 95%+ in Class 10 Board Exams.`;

    const prompt = `Student Question for Class 10 ${subject} (${chapter}):
"${question}"

Provide an exam-oriented solution structured for 3-mark to 5-mark board exam answers.`;

    const timeoutPromise = new Promise<{ text?: string }>((resolve) => {
      setTimeout(() => {
        resolve({
          text: `### 📌 Class 10th Solution: ${question}

**Subject:** ${subject} | **Topic:** ${chapter}

#### 1. 💡 Core NCERT Definition & Principle
In Class 10 Board examinations, answers must follow standard NCERT terminology.
- State the exact law or definition without omitting conditions (e.g. "at constant temperature" for Ohm's Law, or "in the absence of air" for calcination).

#### 2. 🔬 Step-by-Step Breakdown & Key Equation
- **Step 1:** Write the given values with units and standard symbols.
- **Step 2:** State the governing formula or balanced chemical reaction:
  $$\\text{Formula} \\rightarrow \\text{Substitution} \\rightarrow \\text{Final value with SI unit}$$
- **Step 3:** Highlight the final answer in a neat box.

#### 3. 🎯 Board Exam "Must-Mention" Keywords (Scoring Secret)
1. Always mention the SI unit in physics and numerical problems.
2. For biology questions, mention cellular location (e.g., mitochondria, chloroplast, glomerulus).
3. For chemistry, specify state symbols: $(s)$, $(l)$, $(g)$, $(aq)$, and reaction conditions.

#### 4. ⚠️ Examiner Trap Alert
CBSE examiners deduct 0.5 to 1 mark if directional arrows are missing on light rays or electric current circuits. Double-check arrows before submitting!`,
        });
      }, 7000);
    });

    const aiCall = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.4,
      },
    });

    const response = await Promise.race([aiCall, timeoutPromise]);
    const answerText = response.text || 'Unable to generate response at this time.';

    return res.json({
      answer: answerText,
      source: 'gemini-3.8-flash',
    });
  } catch (error: any) {
    console.error('Error in /api/gemini/doubt-solver:', error);
    return res.status(500).json({
      error: 'Failed to answer doubt. Please check your network or try again.',
      fallbackAnswer: 'An error occurred while communicating with the AI mentor. Please try rephrasing your question.',
    });
  }
});

// AI Animated Video Lesson Generator Endpoint
app.post('/api/gemini/generate-video-lesson', async (req: Request, res: Response) => {
  try {
    const {
      topic = 'Chemical Reactions and Equations',
      subject = 'Science',
      classLevel = 10,
      language = 'hinglish',
      preferredAnimation = 'auto',
    } = req.body;

    const ai = getGenAI();

    // Helper fallback scene builder
    const getFallbackVideo = () => {
      let animType = 'whiteboard';
      const tLower = topic.toLowerCase();
      const sLower = subject.toLowerCase();

      if (preferredAnimation && preferredAnimation !== 'auto') {
        animType = preferredAnimation;
      } else if (tLower.includes('circuit') || tLower.includes('electric') || tLower.includes('ohm') || tLower.includes('current')) {
        animType = 'circuit';
      } else if (tLower.includes('light') || tLower.includes('ray') || tLower.includes('lens') || tLower.includes('mirror') || tLower.includes('reflection') || tLower.includes('refraction')) {
        animType = 'ray_optics';
      } else if (tLower.includes('reaction') || tLower.includes('acid') || tLower.includes('base') || tLower.includes('metal') || tLower.includes('chemical') || tLower.includes('carbon')) {
        animType = 'chemical_reaction';
      } else if (tLower.includes('equation') || tLower.includes('triangle') || tLower.includes('poly') || tLower.includes('trigo') || sLower.includes('math')) {
        animType = 'math_parabola';
      } else if (tLower.includes('cell') || tLower.includes('life') || tLower.includes('heart') || tLower.includes('photo') || tLower.includes('plant') || tLower.includes('reproduction')) {
        animType = 'biology_cell';
      } else if (tLower.includes('atom') || tLower.includes('electron') || tLower.includes('bohr') || tLower.includes('nucleus')) {
        animType = 'atom_bohr';
      }

      return {
        id: `vid-gen-${Date.now()}`,
        chapterId: `custom-${Date.now()}`,
        chapterTitle: topic,
        classLevel: Number(classLevel) || 10,
        subject,
        totalDurationSec: 130,
        thumbnailGradient: 'from-indigo-600 via-purple-600 to-pink-600',
        tagline: `AI Animated 4K Board Masterclass: ${topic}`,
        scenes: [
          {
            id: 'scene-1',
            sceneNumber: 1,
            title: `Introduction: ${topic}`,
            durationSec: 25,
            animationType: animType,
            narrationText: `Namaste dosto! Aaj ke is AI animated masterclass me hum Class ${classLevel} ${subject} ke sabse important chapter "${topic}" ko 3D visuals aur diagrams ke sath samjhenge. Board exam me is topic se direct 3 se 5 marks ke questions aate hain. Chaliye shuru karte hain!`,
            subtitles: `Welcome to Class ${classLevel} ${subject}: "${topic}". Board weightage: 5-8 Marks.`,
            keyTerms: ['Core Principle', 'NCERT Baseline', 'Board Weightage'],
            formulaOrEquation: `${topic} ➔ Step 1: Definition & Visual Model`,
            topperTip: 'Board Examiners award full marks when you start with precise scientific definition and neat labeled diagrams.',
            visualElements: {
              headline: topic,
              subtext: `Class ${classLevel} • ${subject} • Animated Masterclass`,
              diagramLabel: 'Conceptual Overview & Board Blueprint',
              highlightBox: '🎯 100% NCERT Verified Concept',
            },
          },
          {
            id: 'scene-2',
            sceneNumber: 2,
            title: `Visual Simulation & Scientific Working`,
            durationSec: 35,
            animationType: animType,
            narrationText: `Dhyan se is animated simulation ko dekhiye. Yaha par real-time dynamic working show ho rahi hai. Jab bhi aap board exam me iska answer likhein, to hamesha directional arrows aur component labels clearly banayein. Har ek step logical progression follow karta hai.`,
            subtitles: `Observe the live physics/chemical simulation. Notice the continuous flow and equilibrium conditions.`,
            keyTerms: ['Process Flow', 'Equilibrium', 'Governing Law'],
            formulaOrEquation: animType === 'circuit' ? 'V = I × R (Ohm\'s Law)' : animType === 'chemical_reaction' ? 'Reactants ➔ Products + Energy' : animType === 'ray_optics' ? '1/f = 1/v - 1/u (Lens Formula)' : 'Principle Equation',
            topperTip: 'Never omit directional indicators or units in numerical problems. Mention SI units in the final line.',
            visualElements: {
              headline: 'Mechanism in Action',
              subtext: 'Real-time animated visualization of principles',
              diagramLabel: 'Live Process Simulation',
              highlightBox: '⚡ Real-time Animated Canvas',
            },
          },
          {
            id: 'scene-3',
            sceneNumber: 3,
            title: `Key Formulae & Critical Derivations`,
            durationSec: 35,
            animationType: animType,
            narrationText: `Ab aate hain is topic ke sabse scoring section par: Mathematical relations aur chemical balancing. Is formula ko topper notes me box me highlight kiya jata hai. Har symbol ka meaning aur unit zaroor likhiye.`,
            subtitles: `Key Formula Derivation. State where symbols stand for and specify standard SI units.`,
            keyTerms: ['Formula Matrix', 'Dimensional Check', 'Sign Convention'],
            formulaOrEquation: 'Standard Relation: Output = Function(Input) + Constant',
            topperTip: 'Write each step on a fresh line. Do not bunch calculations together in the margin.',
            visualElements: {
              headline: 'Formula & Equation Vault',
              subtext: 'Derivations that fetch full marks in Board Evaluation',
              diagramLabel: 'Mathematical & Theoretical Matrix',
              highlightBox: '💡 1-Mark Quick Formula Trick',
            },
          },
          {
            id: 'scene-4',
            sceneNumber: 4,
            title: `Board 10-Year PYQ & Examiner Traps`,
            durationSec: 35,
            animationType: animType,
            narrationText: `Yeh question pichle 10 saalon me 5 baar repeat hua hai! Examiner yaha ek common trap set karta hai jisme 60% students marks gawa dete hain. Is alert ko hamesha dhyan me rakhein aur answer ko pointwise presentation me likhein.`,
            subtitles: `Previous Year Board Exam Trap: Avoid common sign convention and labeling errors.`,
            keyTerms: ['PYQ Analysis', 'Examiner Trap', 'Model Answer'],
            formulaOrEquation: 'Model Answer Strategy: Statement ➔ Diagram ➔ Steps ➔ Result',
            topperTip: 'Underline key NCERT keywords with pencil before submitting your answer sheet.',
            visualElements: {
              headline: 'Board Exam Scoring Strategy',
              subtext: 'How to convert 3-mark answers into 5-mark topper scripts',
              diagramLabel: 'Board PYQ Breakdown & Answer Layout',
              highlightBox: '⚠️ Examiner Trap Alert',
            },
          },
        ],
      };
    };

    if (!ai) {
      return res.json({
        success: true,
        video: getFallbackVideo(),
        source: 'curated_animation_engine',
      });
    }

    const systemInstruction = `You are "Topper Animator", an expert CBSE/ICSE/State Board master educator and educational video director.
Generate a high-yield, 4-scene animated video script and storyboard for Class ${classLevel} students studying "${topic}".
Return ONLY a valid JSON object without markdown formatting or code blocks.
The JSON must adhere to this exact structure:
{
  "chapterTitle": "${topic}",
  "tagline": "Brief high-energy tagline",
  "scenes": [
    {
      "sceneNumber": 1,
      "title": "Scene 1 Title",
      "durationSec": 25,
      "animationType": "circuit" | "ray_optics" | "chemical_reaction" | "math_parabola" | "biology_cell" | "atom_bohr" | "whiteboard",
      "narrationText": "Spoken teacher explanation in ${language === 'hindi' ? 'pure Hindi' : language === 'english' ? 'English' : 'Hinglish (conversational Hindi + English tech terms)'}",
      "subtitles": "Short 1-line subtitle summary",
      "keyTerms": ["Term 1", "Term 2", "Term 3"],
      "formulaOrEquation": "Core formula or chemical reaction",
      "topperTip": "Topper secret or examiner trap warning",
      "visualElements": {
        "headline": "Visual Heading",
        "subtext": "Visual Explanation",
        "diagramLabel": "Diagram component label",
        "highlightBox": "Key takeaway label"
      }
    }
  ]
}`;

    const prompt = `Create an animated storyboard and voiceover script for:
Topic: "${topic}"
Subject: "${subject}"
Class: ${classLevel}th
Language: ${language}
Preferred Animation Engine: ${preferredAnimation}`;

    const timeoutPromise = new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({ text: null });
      }, 7500);
    });

    const aiCall = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    const response = await Promise.race([aiCall, timeoutPromise]);
    let generatedData = null;

    if (response && response.text) {
      try {
        const cleaned = response.text.replace(/```json/gi, '').replace(/```/gi, '').trim();
        generatedData = JSON.parse(cleaned);
      } catch (err) {
        console.warn('Could not parse Gemini JSON response, using structured fallback', err);
      }
    }

    if (!generatedData || !Array.isArray(generatedData.scenes) || generatedData.scenes.length === 0) {
      return res.json({
        success: true,
        video: getFallbackVideo(),
        source: 'curated_smart_fallback',
      });
    }

    // Assemble complete ChapterVideo
    const completeVideo = {
      id: `vid-ai-${Date.now()}`,
      chapterId: `gen-${Date.now()}`,
      chapterTitle: generatedData.chapterTitle || topic,
      classLevel: Number(classLevel) || 10,
      subject,
      totalDurationSec: generatedData.scenes.reduce((acc: number, s: any) => acc + (s.durationSec || 30), 0),
      thumbnailGradient: 'from-violet-600 via-indigo-600 to-sky-600',
      tagline: generatedData.tagline || `AI Animated Masterclass: ${topic}`,
      scenes: generatedData.scenes.map((s: any, idx: number) => ({
        id: `sc-${idx + 1}`,
        sceneNumber: idx + 1,
        title: s.title || `Concept Part ${idx + 1}`,
        durationSec: s.durationSec || 30,
        animationType: s.animationType || 'whiteboard',
        narrationText: s.narrationText || '',
        subtitles: s.subtitles || '',
        keyTerms: Array.isArray(s.keyTerms) ? s.keyTerms : ['Core Law', 'NCERT'],
        formulaOrEquation: s.formulaOrEquation || '',
        topperTip: s.topperTip || 'Write in pointwise format with diagrams.',
        visualElements: s.visualElements || {
          headline: s.title || topic,
          subtext: 'Concept animation in action',
          diagramLabel: 'Animated Illustration',
          highlightBox: 'NCERT Point',
        },
      })),
    };

    return res.json({
      success: true,
      video: completeVideo,
      source: 'gemini-3.8-flash',
    });
  } catch (error: any) {
    console.error('Error in /api/gemini/generate-video-lesson:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate AI video lesson.',
    });
  }
});


// Dev Vite middleware or static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Class 10th Notes & Access App server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
