import { ChapterVideo, AnimationType, ClassLevel, ChapterNote } from '../types';
import { CHAPTER_NOTES } from './class10NotesData';

export const CURATED_CHAPTER_VIDEOS: ChapterVideo[] = [
  {
    id: 'vid-sci-ch1',
    chapterId: 'sci-ch1',
    chapterTitle: 'Chemical Reactions & Equations',
    classLevel: 10,
    subject: 'Science',
    totalDurationSec: 140,
    thumbnailGradient: 'from-amber-600 via-rose-600 to-indigo-900',
    tagline: 'Precipitation, Redox & 10-Second Balancing Trick',
    scenes: [
      {
        id: 'sc-c1-1',
        sceneNumber: 1,
        title: 'Introduction: What is a Chemical Reaction?',
        durationSec: 25,
        animationType: 'chemical_reaction',
        narrationText: 'Namaste students! Chemical reaction tab hoti hai jab chemical bonds break aur form hote hain to make entirely new substances with new properties. Board exam me 4 observations puchi jati hain: change in state, change in colour, evolution of gas, aur change in temperature.',
        subtitles: 'Chemical reaction: Old bonds break, new bonds form with new chemical properties.',
        keyTerms: ['Chemical Change', 'Reactants', 'Products', 'Law of Conservation of Mass'],
        formulaOrEquation: '2Mg(s) + O₂(g) ➔ 2MgO(s) + Dazzling White Flame',
        topperTip: 'Always write state symbols (s, l, g, aq) in board exams. Examiners award 1 extra mark for state precision.',
        visualElements: {
          headline: 'Chemical Reactions & Equations',
          subtext: 'Class 10 Science • Chapter 1 • High Board Yield',
          diagramLabel: 'Reaction Vessel & Bond Rearrangement',
          highlightBox: '🔥 Dazzling White Flame + MgO White Powder',
        },
      },
      {
        id: 'sc-c1-2',
        sceneNumber: 2,
        title: 'Types of Reactions: Combination & Decomposition',
        durationSec: 35,
        animationType: 'chemical_reaction',
        narrationText: 'Dekhiye Quicklime यानी Calcium oxide me jab paani milate hain, to hissing sound aati hai aur heavy heat release hoti hai. Yeh combination reaction aur exothermic reaction dono ka classic example hai. Slaked lime banta hai jo white washing me use hota hai.',
        subtitles: 'CaO + H₂O ➔ Ca(OH)₂ + Enormous Heat (Exothermic Combination).',
        keyTerms: ['Quicklime (CaO)', 'Slaked Lime Ca(OH)₂', 'Exothermic', 'Precipitate'],
        formulaOrEquation: 'CaO(s) + H₂O(l) ➔ Ca(OH)₂(aq) + Heat',
        topperTip: 'Slaked lime reacts with atmospheric CO₂ slowly over 2-3 days to form shiny CaCO₃ (Calcium carbonate).',
        visualElements: {
          headline: 'Exothermic Combination in Action',
          subtext: 'Boiling bubbling beaker releasing vigorous heat',
          diagramLabel: 'Beaker with Rising Gas Bubbles',
          highlightBox: '⚠️ Hissing Sound & Beaker Gets Hot!',
        },
      },
      {
        id: 'sc-c1-3',
        sceneNumber: 3,
        title: 'Precipitation & Double Displacement Reaction',
        durationSec: 35,
        animationType: 'chemical_reaction',
        narrationText: 'Ab dekhiye Lead nitrate aur Potassium iodide ka famous experiment! Jaise hi do clear solutions milte hain, turant ek bright yellow solid precipitate niche settle ho jata hai: Lead Iodide! Yeh insoluble substance precipitate kehlata hai.',
        subtitles: 'Pb(NO₃)₂ + 2KI ➔ PbI₂ ↓ (Yellow Precipitate) + 2KNO₃.',
        keyTerms: ['Double Displacement', 'Precipitate (Insoluble)', 'Ion Exchange'],
        formulaOrEquation: 'Pb(NO₃)₂(aq) + 2KI(aq) ➔ PbI₂(s)↓ (Bright Yellow) + 2KNO₃(aq)',
        topperTip: 'CBSE 2023, 2020 question: State the colour of precipitate formed! Answer: Bright Yellow PbI₂.',
        visualElements: {
          headline: 'Precipitation Simulation',
          subtext: 'Yellow precipitate settling at the bottom of the flask',
          diagramLabel: 'Insoluble Particles Crystallizing',
          highlightBox: '⭐ 100% Board Question: Colour is Yellow!',
        },
      },
      {
        id: 'sc-c1-4',
        sceneNumber: 4,
        title: 'Redox Reactions: Oxidation & Reduction Secrets',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: 'Redox me OIL RIG rule yaad rakhiye: Oxidation Is Loss of electrons/hydrogen or gain of oxygen. Reduction Is Gain! In CuO + H₂ gives Cu + H₂O, CuO oxygen lose kar raha hai isliye reduced hai, aur H₂ oxidised hai. Oxidising agent CuO hai!',
        subtitles: 'Redox = Reduction + Oxidation simultaneously occurring.',
        keyTerms: ['Oxidation', 'Reduction', 'Oxidising Agent', 'Reducing Agent'],
        formulaOrEquation: 'CuO + H₂ ➔ Cu + H₂O (CuO is Reduced; H₂ is Oxidised)',
        topperTip: 'Examiner Trap: The substance that gets reduced is always the Oxidising Agent! Never get confused.',
        visualElements: {
          headline: 'Redox Decoded with OIL RIG Rule',
          subtext: 'Step-by-step electron and oxygen transfer',
          diagramLabel: 'Electron & Oxygen Transfer Blueprint',
          highlightBox: '🎯 Examiner Trap Solved!',
        },
      },
    ],
  },
  {
    id: 'vid-sci-ch12',
    chapterId: 'sci-ch12',
    chapterTitle: 'Electricity & Ohm’s Law',
    classLevel: 10,
    subject: 'Science',
    totalDurationSec: 145,
    thumbnailGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    tagline: 'Animated Circuits, Electron Drift & Numerical Hacks',
    scenes: [
      {
        id: 'sc-c12-1',
        sceneNumber: 1,
        title: 'Electric Current & Potential Difference',
        durationSec: 30,
        animationType: 'circuit',
        narrationText: 'Electric current charges ke flow ka rate hai: I = Q upon t. Dhyan dijiye, electrons negative terminal se positive terminal ki taraf move karte hain, lekin conventional current opposite direction me positive se negative mani jati hai.',
        subtitles: 'Electric Current I = Q/t. Unit is Ampere (Coulomb/sec).',
        keyTerms: ['Electric Charge (Q)', 'Current (I)', 'Potential Difference (V)', 'Ampere'],
        formulaOrEquation: 'I = Q / t  and  V = W / Q  (1 Volt = 1 Joule / 1 Coulomb)',
        topperTip: 'Always mention that Ammeter is connected in SERIES (low resistance) and Voltmeter in PARALLEL (high resistance).',
        visualElements: {
          headline: 'Electric Current & Flow of Electrons',
          subtext: 'Animated electron movement in conductive closed loop',
          diagramLabel: 'DC Circuit with Animated Current Loop',
          highlightBox: '⚡ Direction of Electrons: Negative ➔ Positive',
        },
      },
      {
        id: 'sc-c12-2',
        sceneNumber: 2,
        title: 'Ohm’s Law & Resistance Factor Animation',
        durationSec: 40,
        animationType: 'circuit',
        narrationText: 'Ohm ka niyam kehta hai ki constant temperature par potential difference current ke directly proportional hota hai: V = I into R. Resistance depend karta hai length par, area of cross-section par, aur resistivity rho par.',
        subtitles: 'Ohm\'s Law: V = I × R at constant temperature. R = ρ(L / A).',
        keyTerms: ['Ohm\'s Law', 'Resistance R', 'Resistivity ρ', 'Temperature Dependency'],
        formulaOrEquation: 'V = I × R   |   R = ρ × (L / A)   |   Unit of ρ: Ω·m',
        topperTip: 'If a wire is stretched to double its length, its resistance becomes 4 times (n² times), because Area halves!',
        visualElements: {
          headline: 'Ohm’s Law Circuit Simulation',
          subtext: 'Real-time voltage change and current deflection on ammeter',
          diagramLabel: 'V-I Linear Characteristic Curve',
          highlightBox: '💡 Wire stretched 2x ➔ R becomes 4R!',
        },
      },
      {
        id: 'sc-c12-3',
        sceneNumber: 3,
        title: 'Series vs Parallel Resistors Comparison',
        durationSec: 35,
        animationType: 'circuit',
        narrationText: 'Series combination me current har resistor me same rehta hai aur total resistance Rs = R1 + R2 + R3 hoti hai. Parallel me potential difference same rehta hai aur 1/Rp = 1/R1 + 1/R2 + 1/R3 hoti hai. Hamare gharon me appliances parallel me judte hain!',
        subtitles: 'Series: R_s = R₁ + R₂. Parallel: 1/R_p = 1/R₁ + 1/R₂.',
        keyTerms: ['Series Circuit', 'Parallel Circuit', 'Domestic Wiring', 'Equivalent Resistance'],
        formulaOrEquation: 'Series: R_net = R₁ + R₂ + R₃   |   Parallel: 1/R_net = 1/R₁ + 1/R₂',
        topperTip: 'Why domestic circuits use Parallel: Each appliance gets full 220V voltage and independent on/off switches.',
        visualElements: {
          headline: 'Series vs Parallel Branching',
          subtext: 'Watch current divide at parallel nodes and stay uniform in series',
          diagramLabel: 'Branching Nodes with Electron Split',
          highlightBox: '🏠 Domestic Wiring is ALWAYS Parallel!',
        },
      },
      {
        id: 'sc-c12-4',
        sceneNumber: 4,
        title: 'Joule’s Heating Effect & Electric Power',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: 'Joule ke heating law ke according H = I square R into t. Aur electric power P = V into I = I square R = V square upon R hoti hai. Commercial unit of energy 1 kilowatt-hour hoti hai jo 3.6 into 10 ki power 6 Joules ke barabar hai!',
        subtitles: 'Heat H = I²Rt. 1 kWh = 3.6 × 10⁶ Joules (1 Board Unit).',
        keyTerms: ['Joule\'s Heating Law', 'Electric Power', 'kWh', 'Commercial Unit'],
        formulaOrEquation: 'H = I²Rt   |   P = V·I = I²R = V²/R   |   1 kWh = 3.6 × 10⁶ J',
        topperTip: 'CBSE Numerical Alert: Convert time to seconds for Heat in Joules; keep in hours for electrical billing units (kWh).',
        visualElements: {
          headline: 'Electric Power & Joule’s Law',
          subtext: 'Formula triangle and electricity bill calculation steps',
          diagramLabel: 'Power & Heat Triangle Matrix',
          highlightBox: '🎯 1 kWh = 3,600,000 Joules!',
        },
      },
    ],
  },
  {
    id: 'vid-sci-ch10',
    chapterId: 'sci-ch10',
    chapterTitle: 'Light: Reflection & Refraction',
    classLevel: 10,
    subject: 'Science',
    totalDurationSec: 145,
    thumbnailGradient: 'from-amber-500 via-orange-600 to-violet-800',
    tagline: 'Ray Optics Simulation, Ray Tracing & Sign Conventions',
    scenes: [
      {
        id: 'sc-c10-1',
        sceneNumber: 1,
        title: 'Spherical Mirrors: Focus, Pole & Center of Curvature',
        durationSec: 30,
        animationType: 'ray_optics',
        narrationText: 'Light straight line me propagate karti hai. Concave mirror converging hota hai jabki Convex mirror diverging. Focal length radius of curvature ki aadhi hoti hai: f = R by 2. Convex mirror hamesha virtual, erect aur diminished image banata hai.',
        subtitles: 'f = R/2. Concave mirror is Converging; Convex mirror is Diverging.',
        keyTerms: ['Concave Mirror', 'Convex Mirror', 'Focal Length', 'Principal Axis'],
        formulaOrEquation: 'f = R / 2   |   Mirror Formula: 1/f = 1/v + 1/u',
        topperTip: 'Convex mirrors are used as rear-view mirrors in cars because they always give an erect image and wide field of view.',
        visualElements: {
          headline: 'Spherical Mirrors Ray Geometry',
          subtext: 'Animated incident parallel rays focusing at focal point F',
          diagramLabel: 'Optical Axis with C, F, and Pole P',
          highlightBox: '🔍 Wide Field of View in Convex Mirrors',
        },
      },
      {
        id: 'sc-c10-2',
        sceneNumber: 2,
        title: 'Lenses & Refraction: Snell’s Law in Motion',
        durationSec: 40,
        animationType: 'ray_optics',
        narrationText: 'Jab light ek medium se dusre me enter karti hai, to speed change hone se bend ho jati hai. Snell ka law: sin i upon sin r equals constant refractive index n. Convex lens converging lens hota hai jo real inverted ya virtual magnified images banata hai.',
        subtitles: 'Snell\'s Law: sin(i) / sin(r) = n₂₁ = v₁ / v₂.',
        keyTerms: ['Refraction', 'Snell\'s Law', 'Refractive Index', 'Convex Lens'],
        formulaOrEquation: 'Lens Formula: 1/f = 1/v - 1/u   |   Magnification m = v/u = hᵢ/hₒ',
        topperTip: 'Examiner Trap: In Lens formula there is a MINUS sign (1/v - 1/u), while in Mirror formula there is a PLUS sign (1/v + 1/u)!',
        visualElements: {
          headline: 'Convex Lens Ray Formation',
          subtext: 'Watch light rays refract through optical center and focus to form real image',
          diagramLabel: 'Biconvex Lens Refraction Rays',
          highlightBox: '⚠️ Lens has MINUS (-), Mirror has PLUS (+)!',
        },
      },
      {
        id: 'sc-c10-3',
        sceneNumber: 3,
        title: 'Cartesian Sign Convention Mastery',
        durationSec: 35,
        animationType: 'ray_optics',
        narrationText: 'Sign convention me optical center ya pole ko origin mante hain. Object hamesha left side me hota hai isliye object distance u hamesha NEGATIVE hoti hai! Concave lens aur concave mirror ki focal length hamesha NEGATIVE hoti hai.',
        subtitles: 'New Cartesian Sign Convention: Object distance u is ALWAYS negative (-).',
        keyTerms: ['Sign Convention', 'Cartesian Origin', 'Object Distance u', 'Focal Sign'],
        formulaOrEquation: 'u is ALWAYS (-). Concave: f is (-). Convex: f is (+).',
        topperTip: 'Write the sign convention table in the first 2 minutes of board exam to prevent negative sign calculation blunders.',
        visualElements: {
          headline: 'Cartesian Sign Coordinates',
          subtext: 'Origin at Pole: Left is (-), Right is (+), Up is (+), Down is (-)',
          diagramLabel: 'Cartesian Coordinate Axes with Sign Rules',
          highlightBox: '📌 u is ALWAYS Negative!',
        },
      },
      {
        id: 'sc-c10-4',
        sceneNumber: 4,
        title: 'Power of a Lens & Board 5-Mark Question',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: 'Power of a lens focal length ka reciprocal hota hai: P = 1 upon f in meters! Iska SI unit Dioptre D hota hai. Convex lens ki power POSITIVE aur concave lens ki power NEGATIVE hoti hai. Combination me powers seedhi add hoti hain: P = P1 + P2.',
        subtitles: 'Power of Lens P = 1/f (in meters). Unit is Dioptre (D).',
        keyTerms: ['Power of Lens (P)', 'Dioptre (D)', 'Focal Length in meters', 'Combination of Lenses'],
        formulaOrEquation: 'P = 1 / f(m)   |   P_net = P₁ + P₂   |   1 Dioptre = 1 m⁻¹',
        topperTip: 'Numerical Trap: If focal length is given in cm (e.g. 20 cm), first convert to meters (0.2 m) before calculating Power: 1/0.2 = +5 D!',
        visualElements: {
          headline: 'Lens Power Matrix & Dioptres',
          subtext: 'Step-by-step conversion of cm to meters in lens power',
          diagramLabel: 'Power & Focal Reciprocal Chart',
          highlightBox: '🎯 Convert cm to meters FIRST!',
        },
      },
    ],
  },
  {
    id: 'vid-sci-ch6',
    chapterId: 'sci-ch6',
    chapterTitle: 'Life Processes: Nutrition & Circulation',
    classLevel: 10,
    subject: 'Science',
    totalDurationSec: 135,
    thumbnailGradient: 'from-emerald-600 via-teal-600 to-indigo-900',
    tagline: 'Animated Photosynthesis, Heart Pumping & Nephron Filtration',
    scenes: [
      {
        id: 'sc-c6-1',
        sceneNumber: 1,
        title: 'Autotrophic Nutrition & Stomata Animation',
        durationSec: 30,
        animationType: 'biology_cell',
        narrationText: 'Green plants autotrophs hote hain jo photosynthesis ke dwara light energy ko chemical energy me convert karte hain. Chloroplast me chlorophyll solar photons ko absorb karta hai, paani split hota hai oxygen me aur CO2 reduce hokar glucose banati hai.',
        subtitles: 'Photosynthesis: 6CO₂ + 12H₂O + Sunlight ➔ C₆H₁₂O₆ + 6O₂ + 6H₂O.',
        keyTerms: ['Photosynthesis', 'Chloroplast', 'Chlorophyll', 'Stomata Guard Cells'],
        formulaOrEquation: '6CO₂ + 12H₂O ➔ C₆H₁₂O₆ + 6O₂ + 6H₂O  (in presence of Light & Chlorophyll)',
        topperTip: 'Guard cells swell when water flows into them, causing stomatal pore to OPEN. When they lose water, pore CLOSES.',
        visualElements: {
          headline: 'Photosynthetic Machinery in Action',
          subtext: 'Photons hitting thylakoids and oxygen gas molecules releasing',
          diagramLabel: 'Guard Cell Pore Opening & Closing',
          highlightBox: '🍃 Oxygen comes from SPLITTING OF WATER!',
        },
      },
      {
        id: 'sc-c6-2',
        sceneNumber: 2,
        title: 'Human Heart & Double Circulation Mechanism',
        durationSec: 35,
        animationType: 'biology_cell',
        narrationText: 'Human heart me 4 chambers hote hain: 2 Atria aur 2 Ventricles. Human body me blood heart se do baar guzarta hai ek complete cycle me: isliye ise Double Circulation kehte hain. Pulmonary circulation lungs ke beech aur Systemic circulation body ke beech!',
        subtitles: 'Double Circulation: Pulmonary Loop (Heart-Lungs) + Systemic Loop (Heart-Body).',
        keyTerms: ['Double Circulation', 'Oxygenated Blood', 'Deoxygenated Blood', 'Ventricles Thick Wall'],
        formulaOrEquation: 'Body ➔ Vena Cava ➔ Right Atrium ➔ Right Ventricle ➔ Lungs ➔ Left Atrium ➔ Left Ventricle ➔ Aorta',
        topperTip: 'Why Ventricles have thicker muscular walls than atria: Because ventricles have to pump blood to entire distant organs under high pressure!',
        visualElements: {
          headline: 'Human 4-Chambered Heart Loop',
          subtext: 'Animated pumping of oxygen-rich and deoxygenated blood streams',
          diagramLabel: 'Double Circulation Closed Circuit',
          highlightBox: '❤️ Thick Muscular Ventricle Walls!',
        },
      },
      {
        id: 'sc-c6-3',
        sceneNumber: 3,
        title: 'Excretion: Nephron Structure & Urine Formation',
        durationSec: 35,
        animationType: 'biology_cell',
        narrationText: 'Kidneys ka functional unit Nephron hota hai. Bowman\'s capsule me high pressure se Glomerular filtration hoti hai. Uske baad Tubular reabsorption me glucose, amino acids aur major water wapas blood me absorb ho jate hain.',
        subtitles: 'Nephron: Glomerular Filtration ➔ Tubular Reabsorption ➔ Secretion ➔ Urine.',
        keyTerms: ['Nephron', 'Bowman\'s Capsule', 'Glomerulus', 'Selective Reabsorption'],
        formulaOrEquation: 'Filtration in Bowman\'s Capsule ➔ Selective Reabsorption in Tubule ➔ Collecting Duct',
        topperTip: 'Initial filtrate in kidneys is about 180 Litres daily, but excreted urine is only 1-2 Litres because 99% is reabsorbed!',
        visualElements: {
          headline: 'Nephron Microscopic Filtration',
          subtext: 'High-pressure blood filtering urea, salts and retaining blood cells',
          diagramLabel: 'Bowman’s Capsule & Henle Loop',
          highlightBox: '💧 99% of 180L Filtrate Reabsorbed Daily!',
        },
      },
      {
        id: 'sc-c6-4',
        sceneNumber: 4,
        title: 'Respiration: Aerobic vs Anaerobic Pathways',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: 'Glucose (6 carbon) cytoplasm me break hokar Pyruvate (3 carbon) banata hai. Agar oxygen present hai to mitochondria me 36-38 ATP bante hain. Lack of oxygen in muscles me Lactic acid banta hai jo muscle cramps ka karan banta hai!',
        subtitles: 'Glucose ➔ Pyruvate (Cytoplasm). With O₂ ➔ CO₂ + H₂O + ATP (Mitochondria).',
        keyTerms: ['Glycolysis', 'Pyruvate', 'Lactic Acid Cramps', 'Mitochondria ATP'],
        formulaOrEquation: 'In Muscle: Pyruvate ➔ Lactic acid + Energy (Cause of Muscle Cramps)',
        topperTip: 'Draw the 3-way breakdown chart of glucose directly from NCERT page 102. CBSE asks this every alternate year!',
        visualElements: {
          headline: 'Breakdown of Glucose by Various Pathways',
          subtext: '3 pathways: Yeast (Ethanol), Muscle (Lactic acid), Mitochondria (CO₂)',
          diagramLabel: 'Pyruvate 3-Pathway Branching Tree',
          highlightBox: '⚡ Lactic Acid Accumulation Causes Cramps!',
        },
      },
    ],
  },
  {
    id: 'vid-math-ch4',
    chapterId: 'math-ch4',
    chapterTitle: 'Quadratic Equations & Discriminant',
    classLevel: 10,
    subject: 'Mathematics',
    totalDurationSec: 130,
    thumbnailGradient: 'from-purple-600 via-pink-600 to-rose-600',
    tagline: 'Parabola Trajectory, Nature of Roots & Shridharacharya Formula',
    scenes: [
      {
        id: 'sc-m4-1',
        sceneNumber: 1,
        title: 'Standard Form & Graphical Parabola',
        durationSec: 30,
        animationType: 'math_parabola',
        narrationText: 'Quadratic equation ax² + bx + c = 0 ki degree 2 hoti hai jaha a zero nahi ho sakta. Graph paper par quadratic polynomial hamesha ek smooth U-shaped Parabola curve banata hai. Curve X-axis ko jitne points par cut karta hai, utne real roots hote hain!',
        subtitles: 'ax² + bx + c = 0, where a ≠ 0. Graph is a parabolic curve.',
        keyTerms: ['Standard Form', 'Degree 2', 'Parabola', 'Roots/Zeros'],
        formulaOrEquation: 'ax² + bx + c = 0  (a ≠ 0)',
        topperTip: 'Always arrange terms in descending powers of x (ax² + bx + c = 0) before applying formulas.',
        visualElements: {
          headline: 'Parabola Curve & Coordinate Axes',
          subtext: 'Real-time curve cutting X-axis at roots alpha and beta',
          diagramLabel: 'Cartesian Coordinate Parabola y = ax² + bx + c',
          highlightBox: '📈 Parabola cuts X-axis at maximum 2 roots!',
        },
      },
      {
        id: 'sc-m4-2',
        sceneNumber: 2,
        title: 'The Quadratic Formula (Shridharacharya Rule)',
        durationSec: 35,
        animationType: 'math_parabola',
        narrationText: 'Jab middle-term split karna tough lage, to seedhe Shridharacharya formula lagaiye: x equals minus b plus minus under root b² - 4ac whole divided by 2a. Isme D = b² - 4ac ko Discriminant kehte hain.',
        subtitles: 'Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a.',
        keyTerms: ['Quadratic Formula', 'Discriminant D', 'Shridharacharya Method'],
        formulaOrEquation: 'x = (-b ± √D) / 2a   where   D = b² - 4ac',
        topperTip: 'Careful with signs! If b is negative (e.g. b = -5), then -b becomes -(-5) = +5.',
        visualElements: {
          headline: 'Shridharacharya Formula Blueprint',
          subtext: 'Step-by-step substitution of coefficients a, b, and c',
          diagramLabel: 'Formula Breakdown & Radical Sign',
          highlightBox: '💡 -(-b) becomes +b! Avoid sign blunders.',
        },
      },
      {
        id: 'sc-m4-3',
        sceneNumber: 3,
        title: 'Nature of Roots & Discriminant Conditions',
        durationSec: 35,
        animationType: 'math_parabola',
        narrationText: 'Discriminant D batata hai roots ka nature: Agar D > 0 hai, to 2 distinct real roots hote hain. Agar D = 0 hai, to 2 equal real roots hote hain (-b/2a). Aur agar D < 0 hai, to koi real root nahi hota (no intersection with x-axis)!',
        subtitles: 'D > 0: Two distinct roots. D = 0: Two equal roots. D < 0: No real roots.',
        keyTerms: ['Nature of Roots', 'D > 0 (Distinct)', 'D = 0 (Equal)', 'D < 0 (Imaginary)'],
        formulaOrEquation: 'D > 0 ➔ 2 Real Distinct  |  D = 0 ➔ 2 Real Equal  |  D < 0 ➔ No Real Roots',
        topperTip: 'Board PYQ Super Favourite: "Find the value of k for which equation has equal roots." Simply set D = b² - 4ac = 0 and solve for k!',
        visualElements: {
          headline: 'Nature of Roots Matrix',
          subtext: 'Watch parabola touch, cut, or float above X-axis based on D',
          diagramLabel: 'Discriminant Discriminator Table',
          highlightBox: '⭐ Equal roots condition: Put D = 0!',
        },
      },
      {
        id: 'sc-m4-4',
        sceneNumber: 4,
        title: 'Word Problems: Speed, Time & Age Model',
        durationSec: 30,
        animationType: 'whiteboard',
        narrationText: 'Board exam me train speed aur tap filling ke word problems aate hain. Formula: Time = Distance / Speed. Jab speed badhti hai to time ghat-ta hai: T1 - T2 = given time difference. Negative root ko reject karein kyunki speed negative nahi ho sakti!',
        subtitles: 'Speed-Distance equation: D/(x) - D/(x+5) = Time Difference.',
        keyTerms: ['Word Problem Model', 'Speed = Distance / Time', 'Reject Negative Root'],
        formulaOrEquation: 'Time Difference: D/x - D/(x + Δv) = Δt',
        topperTip: 'Always write the concluding statement in words with units: "Hence, the original speed of the train is 40 km/h."',
        visualElements: {
          headline: 'Word Problem Algebraic Translation',
          subtext: 'From English sentence to quadratic equation in 3 lines',
          diagramLabel: 'Speed vs Time Equation Setup',
          highlightBox: '🚫 Reject x < 0 for speed, length & age!',
        },
      },
    ],
  },
  {
    id: 'vid-c9-sci-ch4',
    chapterId: 'c9-sci-ch4',
    chapterTitle: 'Structure of the Atom & Bohr’s Model',
    classLevel: 9,
    subject: 'Science',
    totalDurationSec: 130,
    thumbnailGradient: 'from-violet-700 via-indigo-800 to-slate-900',
    tagline: 'Animated Bohr Shells, Electron Orbits & Quantum Energy',
    scenes: [
      {
        id: 'sc-c9-4-1',
        sceneNumber: 1,
        title: 'Rutherford’s Gold Foil Experiment & Nucleus',
        durationSec: 30,
        animationType: 'atom_bohr',
        narrationText: 'Rutherford ne alpha particles ko gold foil par strike kiya. Most particles bina deflect hue seedhe nikal gaye, jisse prove hua ki atom ka maximum space empty hai. Kuch particles deflect hue, aur 1 in 12,000 wapas rebound hue, jisse Nucleus discover hua!',
        subtitles: 'Rutherford discovered Nucleus: Dense, positively charged central core.',
        keyTerms: ['Alpha Particle Scattering', 'Gold Foil', 'Discovery of Nucleus', 'Protons'],
        formulaOrEquation: 'Atom Diameter ≈ 10⁻¹⁰ m   vs   Nucleus Diameter ≈ 10⁻¹⁵ m',
        topperTip: 'Rutherford model failed to explain atom stability because accelerating charges radiate energy and would collapse into nucleus.',
        visualElements: {
          headline: 'Alpha Particle Scattering in Motion',
          subtext: 'Particles passing through empty electron clouds, few rebounding from nucleus',
          diagramLabel: 'Gold Foil Atom Cross-Section',
          highlightBox: '🎯 Nucleus is 100,000x smaller than Atom!',
        },
      },
      {
        id: 'sc-c9-4-2',
        sceneNumber: 2,
        title: 'Bohr’s Model of the Atom & Discrete Shells',
        durationSec: 35,
        animationType: 'atom_bohr',
        narrationText: 'Neils Bohr ne Rutherford ke defect ko dur kiya. Electrons specific non-radiating discrete orbits me revolve karte hain jinko energy levels ya shells K, L, M, N (n = 1, 2, 3, 4) kehte hain. Jab tak electron apni orbit me hai, energy radiate nahi karta!',
        subtitles: 'Bohr\'s Model: Electrons revolve in stable discrete orbits (K, L, M, N shells).',
        keyTerms: ['Bohr\'s Postulates', 'Discrete Orbits', 'Energy Shells (K, L, M, N)', 'Stable Atom'],
        formulaOrEquation: 'Shells: K(n=1), L(n=2), M(n=3), N(n=4)  |  Max electrons = 2n²',
        topperTip: 'Bohr-Bury scheme rule 1: Max electrons in any shell is 2n². K=2, L=8, M=18, N=32.',
        visualElements: {
          headline: 'Concentric Bohr Shells with Orbiting Electrons',
          subtext: 'Electrons revolving stably in K and L shells around dense positive nucleus',
          diagramLabel: 'Bohr Quantum Orbit Model',
          highlightBox: '🪐 Stable Non-Radiating Energy Orbits',
        },
      },
      {
        id: 'sc-c9-4-3',
        sceneNumber: 3,
        title: 'Valency & Octet Rule in Motion',
        durationSec: 35,
        animationType: 'atom_bohr',
        narrationText: 'Outermost shell ko Valence shell kehte hain. Atom stable hone ke liye 8 electrons (Octet) complete karna chahta hai. Sodium (2,8,1) 1 electron lose karta hai to Valency 1 hai. Chlorine (2,8,7) 1 electron gain karta hai to Valency 1 hai!',
        subtitles: 'Valency = Combining capacity. Atoms gain, lose, or share electrons for Octet.',
        keyTerms: ['Valency', 'Valence Electrons', 'Octet Rule', 'Noble Gas Stability'],
        formulaOrEquation: 'If valence electrons ≤ 4: Valency = n. If > 4: Valency = 8 - n.',
        topperTip: 'Never confuse Valence Electrons with Valency! In Oxygen (2,6), valence electrons = 6, but Valency = 8 - 6 = 2.',
        visualElements: {
          headline: 'Valency & Octet Satisfaction',
          subtext: 'Electron exchange between Na(+) and Cl(-) forming stable ionic bond',
          diagramLabel: 'Valence Shell Octet Model',
          highlightBox: '⚠️ Valency is 8 - n when valence e⁻ > 4!',
        },
      },
      {
        id: 'sc-c9-4-4',
        sceneNumber: 4,
        title: 'Atomic Number, Mass Number, Isotopes & Isobars',
        durationSec: 30,
        animationType: 'whiteboard',
        narrationText: 'Atomic number Z number of protons ke barabar hota hai. Mass number A = Protons + Neutrons hota hai. Isotopes me same atomic number but different mass number hote hain (e.g. C-12, C-14). Isobars me same mass number but different atomic number hote hain (e.g. Ar-40, Ca-40)!',
        subtitles: 'Isotopes: Same Z, different A. Isobars: Same A, different Z.',
        keyTerms: ['Atomic Number (Z)', 'Mass Number (A)', 'Isotopes', 'Isobars'],
        formulaOrEquation: 'Z = Number of Protons   |   A = Protons + Neutrons   |   Neutrons = A - Z',
        topperTip: 'Applications of isotopes in board exams: U-235 for nuclear fuel, Co-60 for cancer therapy, I-131 for goitre.',
        visualElements: {
          headline: 'Isotopes vs Isobars Comparison',
          subtext: 'Nuclear notation: ᴬ_Z X with proton and neutron counts',
          diagramLabel: 'Nuclide Matrix & Applications',
          highlightBox: '☢️ Co-60 treats Cancer; I-131 treats Goitre',
        },
      },
    ],
  },
  {
    id: 'vid-c12-phy-ch1',
    chapterId: 'c12-phy-ch1',
    chapterTitle: 'Electric Charges and Fields & Gauss’s Law',
    classLevel: 12,
    subject: 'Physics',
    totalDurationSec: 140,
    thumbnailGradient: 'from-blue-700 via-indigo-700 to-slate-900',
    tagline: 'Animated Electric Dipole, Flux & Gauss Law 3D Visualizer',
    scenes: [
      {
        id: 'sc-c12-p1-1',
        sceneNumber: 1,
        title: 'Coulomb’s Law, Superposition & Quantization',
        durationSec: 35,
        animationType: 'circuit',
        narrationText: 'Class 12th Physics ka pehla chapter: Electric Charges and Fields! Quantization of charge: q = ± n e. Coulomb ka niyam batata hai ki do point charges ke beech electrostatic force F = [1/(4πε₀)] (|q₁ q₂| / r²) hota hai. Medium aane par force K guna kam ho jata hai!',
        subtitles: 'Coulomb’s Law: F = (1/4πε₀) · (|q₁q₂| / r²). Dielectric medium reduces force by K.',
        keyTerms: ['Quantization (q=ne)', 'Coulomb’s Law', 'Permittivity (ε₀)', 'Dielectric Constant (K)'],
        formulaOrEquation: 'F = [1 / (4πε₀)] · [|q₁ q₂| / r²] = 9 × 10⁹ · [|q₁ q₂| / r²]',
        topperTip: 'Vector form me F⃗₁₂ = -F⃗₂₁ obey karta hai Newton’s Third Law. Direction hamesha line joining charges ke along hoti hai!',
        visualElements: {
          headline: 'Coulomb Interaction & Inverse Square Law',
          subtext: 'Electric lines of force radiating symmetrically from charges',
          diagramLabel: 'Charge Interaction Blueprint',
          highlightBox: '⚡ In dielectric medium: F_med = F_vac / K',
        },
      },
      {
        id: 'sc-c12-p1-2',
        sceneNumber: 2,
        title: 'Electric Dipole: Axial vs Equatorial Fields',
        durationSec: 35,
        animationType: 'circuit',
        narrationText: 'Dipole moment p⃗ = q · (2a⃗), negative se positive charge ki taraf directed hota hai. Axial line par electric field E_axial = 2kp / r³ hota hai, jabki Equatorial line par E_equatorial = kp / r³ hota hai. Yaad rakhiye: Axial field, equatorial se exactly DOUBLE hoti hai!',
        subtitles: 'Dipole Field: E_axial = 2kp / r³ (double of E_equatorial = kp / r³ at distance r >> a).',
        keyTerms: ['Dipole Moment (p⃗)', 'Axial Line (2kp/r³)', 'Equatorial Line (kp/r³)', 'Torque τ = p E sinθ'],
        formulaOrEquation: 'E_axial = 2kp / r³   vs   E_equatorial = kp / r³   (r >> a)',
        topperTip: 'Uniform electric field me dipole par net force ZERO hota hai, lekin torque τ = p E sin θ lagta hai! Non-uniform field me force aur torque dono lagte hain.',
        visualElements: {
          headline: 'Dipole Field Asymmetry',
          subtext: 'Axial vs Equatorial electric vector orientation',
          diagramLabel: 'Electric Dipole Vectors',
          highlightBox: '💡 E_axial = 2 × E_equatorial (CBSE MCQ Favourite!)',
        },
      },
      {
        id: 'sc-c12-p1-3',
        sceneNumber: 3,
        title: 'Gauss’s Law & Electric Flux Integration',
        durationSec: 35,
        animationType: 'circuit',
        narrationText: 'Gauss’s Law states: Kisi bhi closed Gaussian surface se nikalne wala total electric flux Φ = ∮ E⃗ · dA⃗ = q_enclosed / ε₀ hota hai. Infinite straight wire ke liye field E = λ / (2πε₀ r) hota hai, aur thin infinite plane sheet ke liye E = σ / (2ε₀) jo distance r par depend nahi karta!',
        subtitles: 'Gauss Law: ∮ E⃗ · dA⃗ = q_enclosed / ε₀. Line wire: E = λ/(2πε₀r). Plane sheet: E = σ/(2ε₀).',
        keyTerms: ['Electric Flux (Φ = ∫E·dA)', 'Gauss’s Law', 'Linear Charge (λ)', 'Surface Charge (σ)'],
        formulaOrEquation: '∮ E⃗ · dA⃗ = q_enclosed / ε₀   |   Line: E = λ/(2πε₀r)   |   Sheet: E = σ/(2ε₀)',
        topperTip: 'Thin plane sheet ke liye field distance r se INDEPENDENT hoti hai: E = σ / (2ε₀). Spherical shell ke andar field strictly ZERO hoti hai!',
        visualElements: {
          headline: 'Gauss’s Law 3D Flux Manifold',
          subtext: 'Cylindrical Gaussian surface around infinite wire',
          diagramLabel: 'Gaussian Surface & Normal Vectors',
          highlightBox: '🎯 Sheet field is CONSTANT at all distances!',
        },
      },
      {
        id: 'sc-c12-p1-4',
        sceneNumber: 4,
        title: 'Board Exam 5-Mark Derivations & Pitfalls',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: 'CBSE Section D ka 5-mark guaranteed question: Gauss law se infinite wire ka derivation! Step 1: Flat circular ends par θ = 90° hone se flux zero hota hai. Step 2: Curved surface par flux E × 2πrl hota hai. Step 3: q_in = λl rakh kar E = λ / 2πε₀r derive karein!',
        subtitles: 'Derivation: Flat caps have flux = 0; Curved surface flux = E(2πrl) = λl/ε₀ ⇒ E = λ/(2πε₀r).',
        keyTerms: ['5-Mark Derivation', 'Gaussian Cylinder', 'Flat Cap Flux = 0', 'Step Marking'],
        formulaOrEquation: 'E · (2π r l) = (λ · l) / ε₀  ⟹  E = λ / (2πε₀ r)',
        topperTip: 'Direction of dipole moment p⃗ is always from -q to +q (chemistry me ulta hota hai, physics me negative to positive!).',
        visualElements: {
          headline: 'CBSE 5-Mark Derivation Masterplan',
          subtext: 'Precise diagram with area vectors dA₁ and dA₂ normal to field lines',
          diagramLabel: 'Board Exam Answer Sheet Blueprint',
          highlightBox: '⭐ 5/5 Marks: Show flat ends flux is ZERO!',
        },
      },
    ],
  },
  {
    id: 'vid-c12-chem-ch2',
    chapterId: 'c12-chem-ch2',
    chapterTitle: 'Electrochemistry & Nernst Equation',
    classLevel: 12,
    subject: 'Chemistry',
    totalDurationSec: 135,
    thumbnailGradient: 'from-amber-600 via-rose-700 to-indigo-900',
    tagline: 'Galvanic Cell, Salt Bridge & Animated Nernst Equilibrium',
    scenes: [
      {
        id: 'sc-c12-c2-1',
        sceneNumber: 1,
        title: 'Daniell Cell, Electrodes & Salt Bridge',
        durationSec: 35,
        animationType: 'chemical_reaction',
        narrationText: 'Daniell Galvanic cell chemical energy ko electrical energy me convert karta hai! Anode (Zinc) par Oxidation hota hai: Zn → Zn²⁺ + 2e⁻. Cathode (Copper) par Reduction hota hai: Cu²⁺ + 2e⁻ → Cu. Salt bridge electrical neutrality maintain karta hai aur liquid junction potential eliminate karta hai!',
        subtitles: 'Galvanic Cell: Anode = Oxidation (Zn → Zn²⁺), Cathode = Reduction (Cu²⁺ → Cu). Standard E°_cell = 1.10 V.',
        keyTerms: ['Anode (Oxidation)', 'Cathode (Reduction)', 'Salt Bridge (KCl/agar-agar)', 'E°_cell = E°_cathode - E°_anode'],
        formulaOrEquation: 'E°_cell = E°_cathode - E°_anode  |  Daniell Cell: E° = 0.34 - (-0.76) = +1.10 V',
        topperTip: 'Remember "LOAN": Left, Oxidation, Anode, Negative! Anode is negative in galvanic cells.',
        visualElements: {
          headline: 'Galvanic Daniell Cell in Action',
          subtext: 'Electrons flowing through outer circuit from Zn anode to Cu cathode',
          diagramLabel: 'Electrochemical Half-Cells & Salt Bridge',
          highlightBox: '💡 "LOAN": Left Oxidation Anode Negative!',
        },
      },
      {
        id: 'sc-c12-c2-2',
        sceneNumber: 2,
        title: 'Nernst Equation at Non-Standard Conditions',
        durationSec: 35,
        animationType: 'chemical_reaction',
        narrationText: 'Jab ion concentration 1 M nahi hoti, tab cell potential Nernst Equation se nikalte hain: E_cell = E°_cell - (0.0591 / n) log [Anode ion] / [Cathode ion] at 298 K! Pure solid metals Zn aur Cu ki molar concentration 1 li jati hai!',
        subtitles: 'Nernst Equation: E_cell = E°_cell - (0.0591/n) log ([Zn²⁺]/[Cu²⁺]) at 298 K.',
        keyTerms: ['Nernst Equation', 'Reaction Quotient (Q)', 'n = electrons transferred', 'Gibbs Energy ΔG° = -nFE°'],
        formulaOrEquation: 'E_cell = E°_cell - (0.0591 / n) · log₁₀([Zn²⁺] / [Cu²⁺])   at 298 K',
        topperTip: 'Equilibrium par E_cell = 0 ho jata hai! Tab E°_cell = (0.0591 / n) log K_c formula se Equilibrium constant K_c nikala jata hai.',
        visualElements: {
          headline: 'Nernst Equation Dynamic Curve',
          subtext: 'As [Zn²⁺] increases or [Cu²⁺] decreases, E_cell drops linearly with log Q',
          diagramLabel: 'Voltage vs Concentration Gradient',
          highlightBox: '⚡ At equilibrium: E_cell = 0, Q = K_c',
        },
      },
      {
        id: 'sc-c12-c2-3',
        sceneNumber: 3,
        title: 'Kohlrausch’s Law & Molar Conductivity',
        durationSec: 30,
        animationType: 'chemical_reaction',
        narrationText: 'Kohlrausch’s Law: Limiting molar conductivity of an electrolyte can be represented as the sum of individual contributions of its anions and cations! Yeh law weak electrolytes like acetic acid ka Λ°_m aur degree of dissociation α calculate karne ke kaam aata hai!',
        subtitles: 'Kohlrausch Law: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋. Degree of dissociation α = Λ_m / Λ°_m.',
        keyTerms: ['Molar Conductivity (Λ_m = 1000κ/M)', 'Limiting Conductivity (Λ°_m)', 'Kohlrausch Law', 'Degree of Dissociation (α)'],
        formulaOrEquation: 'Λ°_m (CH₃COOH) = λ°(CH₃COO⁻) + λ°(H⁺)   |   α = Λ_m / Λ°_m',
        topperTip: 'Dilution badhane par conductivity κ kam hoti hai (ions per unit volume kam ho jate hain), lekin molar conductivity Λ_m badhti hai!',
        visualElements: {
          headline: 'Ionic Conductivity & Dilution Trends',
          subtext: 'Conductivity κ decreases on dilution, while molar conductivity Λ_m increases',
          diagramLabel: 'Kohlrausch Ionic Contributions',
          highlightBox: '🎯 Λ_m increases on dilution for all electrolytes!',
        },
      },
      {
        id: 'sc-c12-c2-4',
        sceneNumber: 4,
        title: 'Board Numericals & Common Examiner Traps',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: 'Board exam trap: Stoichiometric coefficients ko bhool jana! Agar equation Al³⁺ + 3e⁻ → Al hai, to n = 3 hoga aur Q me powers ka dhyan rakhein. Faraday constant F = 96500 C/mol hota hai. ΔG° = -nFE°_cell me ΔG° negative aane par reaction spontaneous hoti hai!',
        subtitles: 'Stoichiometric powers: For 2Cr + 3Fe²⁺ → 2Cr³⁺ + 3Fe, Q = [Cr³⁺]² / [Fe²⁺]³ and n = 6!',
        keyTerms: ['Reaction Quotient Powers', 'Faraday Constant (96,500 C)', 'ΔG° = -nFE°', 'Spontaneity (ΔG° < 0)'],
        formulaOrEquation: 'ΔG° = -n · F · E°_cell   |   W_max = n · F · E°_cell   |   F ≈ 96,487 C/mol',
        topperTip: 'Hamesha E° values ko standard REDUCTION potentials me convert karke hi check karein. Highest E° means strongest oxidizing agent!',
        visualElements: {
          headline: 'Electrochemistry Numerical Master Sheet',
          subtext: 'Units: E in Volts, ΔG° in Joules/mol, F in Coulombs/mol',
          diagramLabel: 'Board Exam Problem Solver Matrix',
          highlightBox: '🚫 Never forget stoichiometric exponents in Q!',
        },
      },
    ],
  },
  {
    id: 'vid-c11-phy-ch1',
    chapterId: 'c11-phy-ch1',
    chapterTitle: 'Motion in a Plane & Projectile Trajectory',
    classLevel: 11,
    subject: 'Physics',
    totalDurationSec: 130,
    thumbnailGradient: 'from-purple-700 via-indigo-700 to-blue-900',
    tagline: 'Parabolic Trajectory, Maximum Height & Complementary Angles',
    scenes: [
      {
        id: 'sc-c11-p1-1',
        sceneNumber: 1,
        title: '2D Kinematics & Velocity Vector Resolution',
        durationSec: 30,
        animationType: 'math_parabola',
        narrationText: 'Class 11th Physics: Projectile Motion! Jab kisi object ko horizontal se angle θ par initial velocity u se throw kiya jata hai, to horizontal component u_x = u cos θ hamesha constant rehta hai kyunki a_x = 0 hai. Vertical component u_y = u sin θ gravity g ke under continuously badalta hai!',
        subtitles: 'Horizontal velocity u_x = u cos θ remains CONSTANT (a_x = 0). Vertical motion has acceleration a_y = -g.',
        keyTerms: ['Projectile Motion', 'Vector Resolution', 'u_x = u cosθ', 'u_y = u sinθ'],
        formulaOrEquation: 'u_x = u cos θ   |   u_y = u sin θ   |   a_x = 0   |   a_y = -g',
        topperTip: 'Horizontal aur vertical motions ek dusre se completely independent hote hain! Time of flight dono me common parameter hota hai.',
        visualElements: {
          headline: 'Orthogonal Vector Kinematics',
          subtext: 'Horizontal constant velocity vs vertical free-fall acceleration',
          diagramLabel: '2D Velocity Vector Decomposition',
          highlightBox: '💡 Horizontal velocity NEVER changes!',
        },
      },
      {
        id: 'sc-c11-p1-2',
        sceneNumber: 2,
        title: 'Parabolic Trajectory Derivation (Guaranteed Derivation)',
        durationSec: 35,
        animationType: 'math_parabola',
        narrationText: 'Annual exam ka guaranteed derivation: Prove that the trajectory of a projectile is parabolic! Horizontal distance x = (u cos θ) t, isse t = x / (u cos θ). Is t ko vertical equation y = (u sin θ) t - ½ g t² me daalne par: y = x tan θ - [g / (2u² cos² θ)] x², jo ek parabola ki equation hai!',
        subtitles: 'Trajectory Equation: y = x tan θ - [g / (2u² cos² θ)] x² (Form y = ax - bx² ⇒ Parabola).',
        keyTerms: ['Trajectory Derivation', 'Eliminate Time t', 'Parabola Form (y = ax - bx²)', 'Guaranteed 3/5 Marks'],
        formulaOrEquation: 'y = x · tan θ - [g / (2 u² cos² θ)] · x²',
        topperTip: 'Write: "Since y is a quadratic polynomial in x, the path followed by a projectile in a vacuum is a PARABOLA."',
        visualElements: {
          headline: 'Parabolic Curve Simulation',
          subtext: 'Watch projectile trace out an inverted parabolic trajectory curve',
          diagramLabel: 'Trajectory Mathematical Proof',
          highlightBox: '⭐ 100% Guaranteed 3-Mark Annual Exam Derivation!',
        },
      },
      {
        id: 'sc-c11-p1-3',
        sceneNumber: 3,
        title: 'Time of Flight, Maximum Height & Range at 45°',
        durationSec: 35,
        animationType: 'math_parabola',
        narrationText: 'Teeno formulas yaad rakhein: Time of flight T = (2u sin θ) / g. Maximum Height H = (u² sin² θ) / 2g. Horizontal Range R = (u² sin 2θ) / g. Sin 2θ ki maximum value 1 hoti hai jab 2θ = 90° yaani θ = 45°! Isliye 45° par throw karne se maximum range milti hai: R_max = u² / g!',
        subtitles: 'T = (2u sinθ)/g  |  H = (u² sin²θ)/(2g)  |  R = (u² sin 2θ)/g (Maximum at θ = 45°: R_max = u²/g).',
        keyTerms: ['Time of Flight (T)', 'Max Height (H)', 'Range (R)', 'Max Range at 45°'],
        formulaOrEquation: 'T = (2u sin θ)/g   |   H = (u² sin² θ)/(2g)   |   R_max = u² / g',
        topperTip: 'Complementary angles θ aur (90° - θ) par horizontal range bilkul SAME hoti hai! Example: 30° aur 60° par range barabar hogi.',
        visualElements: {
          headline: 'Kinematic Trio & Launch Angle Optimization',
          subtext: 'Trajectories at 30°, 45°, and 60° demonstrating complementary range symmetry',
          diagramLabel: 'Launch Angle Comparison Graph',
          highlightBox: '🎯 Same Range for θ and (90° - θ)!',
        },
      },
      {
        id: 'sc-c11-p1-4',
        sceneNumber: 4,
        title: 'Examiner Traps at the Highest Point',
        durationSec: 30,
        animationType: 'whiteboard',
        narrationText: 'Examiner trap: Kya highest point par velocity zero hoti hai? NAHI! Highest point par sirf vertical velocity zero hoti hai (v_y = 0), lekin horizontal velocity u cos θ abhi bhi maujood hoti hai! Isliye top point par kinetic energy ½ m (u cos θ)² hoti hai aur acceleration vertically downwards g rehta hai!',
        subtitles: 'Examiner Trap: At peak, only vertical velocity is 0. Velocity at top is u cos θ! KE at top = ½ m (u cos θ)².',
        keyTerms: ['Velocity at Top = u cosθ', 'KE at Top = ½ m u² cos²θ', 'Acceleration at Top = g downwards'],
        formulaOrEquation: 'v_top = u cos θ (Horizontal)  |  a_top = g (Downwards)  |  KE_top = KE_initial · cos² θ',
        topperTip: 'Angle between velocity and acceleration at highest point is exactly 90 degrees (velocity is horizontal, g is vertically downward)!',
        visualElements: {
          headline: 'Peak Velocity & Force Vectors',
          subtext: 'Horizontal vector u cos θ perpendicular to gravitational acceleration g',
          diagramLabel: 'Summit Kinematics Breakdown',
          highlightBox: '🚫 Velocity at highest point is NOT zero!',
        },
      },
    ],
  },
  {
    id: 'vid-c11-chem-ch1',
    chapterId: 'c11-chem-ch1',
    chapterTitle: 'Structure of Atom & Bohr Orbits',
    classLevel: 11,
    subject: 'Chemistry',
    totalDurationSec: 135,
    thumbnailGradient: 'from-cyan-600 via-blue-700 to-indigo-950',
    tagline: 'Bohr Shells, de Broglie Dual Nature & Heisenberg Principle',
    scenes: [
      {
        id: 'sc-c11-c1-1',
        sceneNumber: 1,
        title: 'Bohr’s Model & Angular Momentum Quantization',
        durationSec: 35,
        animationType: 'atom_bohr',
        narrationText: 'Class 11 Chemistry: Structure of Atom! Bohr ke model ka sabse pramukh postulate: Electron sirf unhi discrete circular orbits me revolve karta hai jahan uska orbital angular momentum h/2π ka integral multiple ho: m v r = n h / (2π). Inn stationary orbits me ghumte waqt electron energy radiate nahi karta!',
        subtitles: 'Bohr Postulate: Angular momentum is quantized: mvr = n · (h / 2π). Energy is emitted/absorbed during transitions: ΔE = hν.',
        keyTerms: ['Bohr Model', 'Stationary Orbits', 'Quantized Angular Momentum (mvr = nh/2π)', 'Radius r_n = 0.529 n²/Z Å'],
        formulaOrEquation: 'm · v · r = n · (h / 2π)   |   r_n = 0.529 · (n² / Z) Å   |   E_n = -13.6 · (Z² / n²) eV',
        topperTip: 'Negative sign in energy E_n = -13.6 Z²/n² indicates that electron is bound to the nucleus. At n = ∞, E = 0 (free electron).',
        visualElements: {
          headline: 'Bohr Stationary Quantum Orbits',
          subtext: 'Electrons orbiting in stable non-radiating shells K (n=1), L (n=2), M (n=3)',
          diagramLabel: 'Bohr Planetary Atomic Architecture',
          highlightBox: '💡 Energy E = -13.6 / n² eV (Bound State)',
        },
      },
      {
        id: 'sc-c11-c1-2',
        sceneNumber: 2,
        title: 'Hydrogen Emission Spectrum & Rydberg Formula',
        durationSec: 35,
        animationType: 'atom_bohr',
        narrationText: 'Hydrogen spectrum me spectral lines ke paanch series hote hain: Lyman series n₁ = 1 (Ultraviolet region), Balmer series n₁ = 2 (Visible region jo aankhon se dikhta hai), Paschen series n₁ = 3 (Infrared region), Brackett aur Pfund series (Far-infrared). Rydberg formula: Wave number ν̄ = 1/λ = R_H [1/n₁² - 1/n₂²]!',
        subtitles: 'Spectral Series: Lyman (UV, n₁=1), Balmer (Visible, n₁=2), Paschen (IR, n₁=3). Rydberg constant R_H = 109,677 cm⁻¹.',
        keyTerms: ['Hydrogen Spectrum', 'Lyman (UV)', 'Balmer (Visible)', 'Rydberg Formula ν̄ = R_H(1/n₁² - 1/n₂²)'],
        formulaOrEquation: 'ν̄ = 1/λ = R_H · [ 1/(n₁²) - 1/(n₂²) ]   where R_H = 1.097 × 10⁷ m⁻¹',
        topperTip: 'Only the Balmer series falls in the VISIBLE spectrum! Lyman is UV; Paschen, Brackett, and Pfund are Infrared.',
        visualElements: {
          headline: 'Atomic Quantum Transitions',
          subtext: 'Electrons jumping between energy levels releasing photons of specific wavelengths',
          diagramLabel: 'Hydrogen Emission Spectral Lines',
          highlightBox: '🌈 Balmer series is the ONLY visible series!',
        },
      },
      {
        id: 'sc-c11-c1-3',
        sceneNumber: 3,
        title: 'de Broglie Dual Nature & Heisenberg Uncertainty',
        durationSec: 35,
        animationType: 'atom_bohr',
        narrationText: 'de Broglie ne bataya ki har moving matter particle ke sath ek wave judi hoti hai: de Broglie wavelength λ = h / p = h / (m v). Iske baad Heisenberg Uncertainty Principle ne sabit kiya ki kisi micro-particle ki position aur momentum ko ek sath accurately measure karna impossible hai: Δx · Δp ≥ h / (4π)!',
        subtitles: 'de Broglie Dual Nature: λ = h / mv. Heisenberg Uncertainty: Δx · Δp ≥ h / (4π) (or Δx · mΔv ≥ h / (4π)).',
        keyTerms: ['de Broglie Wavelength (λ = h/mv)', 'Wave-Particle Duality', 'Heisenberg Uncertainty Δx·Δp ≥ h/4π'],
        formulaOrEquation: 'λ = h / (m · v)   |   Δx · Δp ≥ h / (4π)   |   Δx · (m · Δv) ≥ h / (4π)',
        topperTip: 'Heisenberg principle shows why electrons cannot exist inside the nucleus (uncertainty in kinetic energy would exceed hundreds of MeV)!',
        visualElements: {
          headline: 'Quantum Wave Mechanics & Uncertainty',
          subtext: 'Probability cloud and wave-particle duality representation',
          diagramLabel: 'Dual Nature Wavefront Simulation',
          highlightBox: '⚛️ Microscopic particles are both waves & particles!',
        },
      },
      {
        id: 'sc-c11-c1-4',
        sceneNumber: 4,
        title: 'Quantum Numbers (n, l, m, s) & Aufbau Principle',
        durationSec: 30,
        animationType: 'whiteboard',
        narrationText: 'Electron ke address ke 4 Quantum Numbers: 1. Principal n (Shell), 2. Azimuthal l = 0 to (n-1) (Subshell s,p,d,f), 3. Magnetic m_l = -l to +l (Spatial orientation), 4. Spin m_s = +½, -½. Aufbau principle ke hisaab se electrons lower (n + l) energy orbitals me pehle bhare jaate hain (e.g. 4s before 3d)!',
        subtitles: 'Quantum Numbers: n (size/shell), l (shape s/p/d/f), m_l (orientation), m_s (spin). Aufbau rule: fill lower (n+l) first.',
        keyTerms: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (m_l)', 'Spin (m_s)', 'Aufbau Rule', 'Pauli Exclusion'],
        formulaOrEquation: 'Total orbitals in shell = n²   |   Max electrons in shell = 2n²   |   Orbital Angular Momentum = √[l(l+1)] ħ',
        topperTip: 'Exceptions to Aufbau rule: Chromium Cr (3d⁵ 4s¹) and Copper Cu (3d¹⁰ 4s¹) due to symmetrical half-filled and fully-filled extra stability!',
        visualElements: {
          headline: 'Electronic Configuration Master Code',
          subtext: 'Orbital energy sequence: 1s < 2s < 2p < 3s < 3p < 4s < 3d',
          diagramLabel: 'Quantum Number Specification Matrix',
          highlightBox: '⭐ Half-filled & fully-filled subshells are extra stable (Cr & Cu)!',
        },
      },
    ],
  },
];

/**
 * Generates a rich, interactive 4-scene AI Animated Video Lesson from any ChapterNote
 */
export function generateVideoFromChapterNote(ch: ChapterNote): ChapterVideo {
  const titleLower = ch.chapterTitle.toLowerCase();
  const subLower = ch.subject.toLowerCase();

  // 1. Detect optimal animation type
  let animType: AnimationType = 'whiteboard';
  if (
    titleLower.includes('electric') ||
    titleLower.includes('circuit') ||
    titleLower.includes('current') ||
    titleLower.includes('magnetic') ||
    titleLower.includes('ohm') ||
    titleLower.includes('semiconductor') ||
    titleLower.includes('capacit') ||
    titleLower.includes('induct') ||
    titleLower.includes('alternating')
  ) {
    animType = 'circuit';
  } else if (
    titleLower.includes('light') ||
    titleLower.includes('reflection') ||
    titleLower.includes('refraction') ||
    titleLower.includes('lens') ||
    titleLower.includes('mirror') ||
    titleLower.includes('optics') ||
    titleLower.includes('ray') ||
    titleLower.includes('eye') ||
    titleLower.includes('prism') ||
    titleLower.includes('wave')
  ) {
    animType = 'ray_optics';
  } else if (
    titleLower.includes('atom') ||
    titleLower.includes('bohr') ||
    titleLower.includes('nuclei') ||
    titleLower.includes('nucleus') ||
    titleLower.includes('matter in our') ||
    titleLower.includes('matter around') ||
    titleLower.includes('dual nature') ||
    titleLower.includes('quantum')
  ) {
    animType = 'atom_bohr';
  } else if (
    subLower.includes('chem') ||
    titleLower.includes('reaction') ||
    titleLower.includes('acid') ||
    titleLower.includes('base') ||
    titleLower.includes('salt') ||
    titleLower.includes('metal') ||
    titleLower.includes('carbon') ||
    titleLower.includes('solution') ||
    titleLower.includes('equilibrium') ||
    titleLower.includes('thermodynamics') ||
    titleLower.includes('bonding') ||
    titleLower.includes('period') ||
    titleLower.includes('haloalkan') ||
    titleLower.includes('biomolecule')
  ) {
    animType = 'chemical_reaction';
  } else if (
    titleLower.includes('life') ||
    titleLower.includes('cell') ||
    titleLower.includes('tissue') ||
    titleLower.includes('reproduc') ||
    titleLower.includes('heredit') ||
    titleLower.includes('control') ||
    titleLower.includes('environment') ||
    titleLower.includes('food') ||
    titleLower.includes('photosynthesis')
  ) {
    animType = 'biology_cell';
  } else if (
    subLower.includes('math') &&
    (titleLower.includes('quadratic') ||
      titleLower.includes('polynomial') ||
      titleLower.includes('linear') ||
      titleLower.includes('coordinate') ||
      titleLower.includes('conic') ||
      titleLower.includes('calculus') ||
      titleLower.includes('motion') ||
      titleLower.includes('gravitation') ||
      titleLower.includes('force'))
  ) {
    animType = 'math_parabola';
  } else {
    animType = 'whiteboard';
  }

  // 2. Select vibrant theme gradient
  let gradient = 'from-indigo-600 via-purple-600 to-slate-900';
  if (subLower.includes('physics')) {
    gradient = 'from-blue-600 via-indigo-600 to-cyan-700';
  } else if (subLower.includes('chem')) {
    gradient = 'from-amber-600 via-rose-600 to-indigo-900';
  } else if (subLower.includes('math')) {
    gradient = 'from-purple-600 via-pink-600 to-rose-700';
  } else if (subLower.includes('social')) {
    gradient = 'from-amber-700 via-orange-600 to-amber-900';
  } else if (subLower.includes('english')) {
    gradient = 'from-rose-600 via-pink-600 to-purple-800';
  } else if (subLower.includes('sci')) {
    if (animType === 'biology_cell') gradient = 'from-emerald-600 via-teal-600 to-indigo-900';
    else if (animType === 'chemical_reaction') gradient = 'from-amber-600 via-rose-600 to-indigo-900';
    else if (animType === 'ray_optics' || animType === 'circuit') gradient = 'from-blue-600 via-indigo-600 to-cyan-500';
    else gradient = 'from-violet-700 via-indigo-800 to-slate-900';
  }

  // 3. Extract key terms
  const rawTerms: string[] = [];
  if (ch.formulasAndReactions?.length) {
    rawTerms.push(...ch.formulasAndReactions.map((f) => f.name));
  }
  if (ch.summaryPoints?.length) {
    for (const p of ch.summaryPoints.slice(0, 4)) {
      const match = p.match(/^([^:•–*★]+):/);
      if (match && match[1].length < 32) {
        rawTerms.push(match[1].trim());
      }
    }
  }
  const uniqueTerms = Array.from(new Set(rawTerms)).filter(Boolean).slice(0, 4);
  if (uniqueTerms.length === 0) {
    uniqueTerms.push(ch.chapterTitle, 'NCERT Core', 'Board Formula', 'Topper Trick');
  }

  const primaryFormula = ch.formulasAndReactions?.[0]?.formula || ch.tagline;
  const secondaryFormula = ch.formulasAndReactions?.[1]?.formula || ch.formulasAndReactions?.[0]?.formula || 'Master NCERT Formulas & Equations';
  const trapTip = ch.examinerTraps?.[0]?.replace(/^Trap:\s*/i, '') || 'Sign conventions, state symbols aur units me marks deduct na hone dein.';
  const topperTip1 = ch.topperHandwrittenHighlights?.[0]?.replace(/^★\s*/, '') || 'NCERT keywords aur precise definitions likhne se full marks milte hain.';
  const topperTip2 = ch.topperHandwrittenHighlights?.[1]?.replace(/^★\s*/, '') || ch.formulasAndReactions?.[0]?.mnemonicOrTip || 'Formula ko pehle box me likhein fir values substitute karein.';
  const pyqObj = ch.pyqs?.[0];

  return {
    id: `vid-${ch.id}`,
    chapterId: ch.id,
    chapterTitle: ch.chapterTitle,
    classLevel: (ch.classLevel as ClassLevel) || 10,
    subject: ch.subject,
    totalDurationSec: 135,
    thumbnailGradient: gradient,
    tagline: ch.tagline,
    scenes: [
      {
        id: `sc-${ch.id}-1`,
        sceneNumber: 1,
        title: 'Core Concept & Fundamental Blueprint',
        durationSec: 30,
        animationType: animType,
        narrationText: `Namaste students! Iss video me hum Class ${ch.classLevel}th ${ch.subject} ke chapter "${ch.chapterTitle}" ke core concepts, formulas aur board examiner traps ko 3D animations ke sath master karenge. ${ch.summaryPoints?.[0] || ch.tagline}`,
        subtitles: `${ch.chapterTitle}: ${ch.summaryPoints?.[0]?.slice(0, 110) || ch.tagline}`,
        keyTerms: uniqueTerms,
        formulaOrEquation: primaryFormula,
        topperTip: topperTip1,
        visualElements: {
          headline: ch.chapterTitle,
          subtext: `Class ${ch.classLevel}th • ${ch.subject} • Board Weightage: ${ch.estimatedBoardWeightage || '5-7 Marks'}`,
          diagramLabel: 'Conceptual Blueprint & Active Simulation',
          highlightBox: `🎯 Board Weightage: ${ch.estimatedBoardWeightage || 'High Yield'}`,
        },
      },
      {
        id: `sc-${ch.id}-2`,
        sceneNumber: 2,
        title: 'Deep Mechanism, Formulae & Key Laws',
        durationSec: 35,
        animationType: animType,
        narrationText: `Ab dekhiye is chapter ka main structural mechanism: ${ch.summaryPoints?.[1] || ch.summaryPoints?.[0] || 'Yeh concept board exams ke liye highest weightage rakhta hai.'} ${ch.formulasAndReactions?.[0] ? `Key formula yaad rakhiye: ${ch.formulasAndReactions[0].name} = ${ch.formulasAndReactions[0].formula}.` : ''}`,
        subtitles: `${ch.summaryPoints?.[1]?.slice(0, 110) || 'Core derivation and formula mastery.'}`,
        keyTerms: uniqueTerms.slice(0, 3).concat(['Key Derivation']),
        formulaOrEquation: secondaryFormula,
        topperTip: topperTip2,
        visualElements: {
          headline: 'Mechanisms & Core Relations',
          subtext: 'Step-by-step logic, animated laws and numerical relations',
          diagramLabel: 'Dynamic Mechanism Visualizer',
          highlightBox: `💡 ${ch.formulasAndReactions?.[0]?.name || 'Core Formula Rule'}`,
        },
      },
      {
        id: `sc-${ch.id}-3`,
        sceneNumber: 3,
        title: 'CBSE Examiner Traps & Common Mistakes',
        durationSec: 35,
        animationType: 'whiteboard',
        narrationText: `Board exam me examiner aapko kahan trap karta hai, dhyan se suniye! ${trapTip} Hamesha step-by-step presentation aur correct units likhna yaad rakhiye!`,
        subtitles: `Examiner Trap: ${trapTip.slice(0, 110)}`,
        keyTerms: ['Examiner Trap', 'Common Mistake', 'Step Marking', 'Topper Presentation'],
        formulaOrEquation: `Trap: ${trapTip.slice(0, 80)}`,
        topperTip: ch.examinerTraps?.[1]?.replace(/^Trap:\s*/i, '') || 'Final answer ko hamesha appropriate SI unit ke sath highlight karein.',
        visualElements: {
          headline: 'Examiner Pitfall Checkpoint',
          subtext: 'Avoid negative marking and preserve your full step marks',
          diagramLabel: 'Mistake Prevention Blueprint',
          highlightBox: '⚠️ Critical Board Trap Avoided!',
        },
      },
      {
        id: `sc-${ch.id}-4`,
        sceneNumber: 4,
        title: 'Board PYQ Solution & Master Takeaways',
        durationSec: 35,
        animationType: animType === 'whiteboard' ? 'whiteboard' : animType,
        narrationText: `Aakhiri scene me board question: ${pyqObj?.question ? `CBSE ne pucha tha: "${pyqObj.question.slice(0, 90)}..."` : 'Is chapter se numericals aur derivations repeat hote hain.'} ${pyqObj?.topperTip ? `Topper strategy: ${pyqObj.topperTip}` : 'NCERT ke exemplar aur PYQs ko zaroor solve karein.'}`,
        subtitles: `Board PYQ: ${pyqObj?.question?.slice(0, 110) || 'Previous Year Board Question & Model Answer.'}`,
        keyTerms: ['PYQ Solved', 'Model Answer', 'Full Marks Strategy', 'NCERT Exemplar'],
        formulaOrEquation: pyqObj ? `PYQ (${pyqObj.year}): ${pyqObj.marks} Marks Question` : primaryFormula,
        topperTip: pyqObj?.topperTip || 'Write final conclusions in full sentences with units.',
        visualElements: {
          headline: 'Board Exam PYQ Master Solution',
          subtext: `Target: ${pyqObj?.year || 'Recent Boards'} • Marks: ${pyqObj?.marks || 3}M`,
          diagramLabel: 'Step-by-Step Model Scoring Solution',
          highlightBox: '⭐ 100% Board Repeat Trend!',
        },
      },
    ],
  };
}

/**
 * Master collection of video lessons for ALL chapters in the syllabus
 */
export const ALL_CHAPTER_VIDEOS: ChapterVideo[] = (() => {
  const videoMap = new Map<string, ChapterVideo>();

  // 1. First insert all handcrafted curated videos
  for (const v of CURATED_CHAPTER_VIDEOS) {
    videoMap.set(v.chapterId, v);
  }

  // 2. Synthesize complete video lesson for every other chapter note
  for (const ch of CHAPTER_NOTES) {
    if (!videoMap.has(ch.id)) {
      videoMap.set(ch.id, generateVideoFromChapterNote(ch));
    }
  }

  return Array.from(videoMap.values());
})();

