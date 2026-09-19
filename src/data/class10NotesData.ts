import { ChapterNote, Flashcard, QuizQuestion, ClassLevel } from '../types';
import { SCIENCE_CHAPTERS } from './scienceChapters';
import { MATHS_CHAPTERS } from './mathsChapters';
import { SOCIAL_SCIENCE_CHAPTERS } from './socialScienceChapters';
import { ENGLISH_CHAPTERS } from './englishChapters';
import { CLASS_9_CHAPTERS } from './class9Chapters';
import { CLASS_11_CHAPTERS } from './class11Chapters';
import { CLASS_12_CHAPTERS } from './class12Chapters';

// Class 10 chapters tagged with classLevel: 10 & isPremium: true
export const CLASS_10_CHAPTERS: ChapterNote[] = [
  ...SCIENCE_CHAPTERS.map((ch) => ({ ...ch, classLevel: 10 as ClassLevel, isPremium: true })),
  ...MATHS_CHAPTERS.map((ch) => ({ ...ch, classLevel: 10 as ClassLevel, isPremium: true })),
  ...SOCIAL_SCIENCE_CHAPTERS.map((ch) => ({ ...ch, classLevel: 10 as ClassLevel, isPremium: true })),
  ...ENGLISH_CHAPTERS.map((ch) => ({ ...ch, classLevel: 10 as ClassLevel, isPremium: true }))
];

// Unified Master Collection for All 4 Classes: 9th, 10th, 11th, and 12th
export const CHAPTER_NOTES: ChapterNote[] = [
  ...CLASS_9_CHAPTERS,
  ...CLASS_10_CHAPTERS,
  ...CLASS_11_CHAPTERS,
  ...CLASS_12_CHAPTERS
];

export const FLASHCARDS: Flashcard[] = [
  // Class 9 Flashcards
  {
    id: 'fc-c9-1',
    classLevel: 9,
    subject: 'Science',
    chapter: 'Matter in Our Surroundings',
    front: 'Why does steam at 100°C cause more severe burns than boiling water at 100°C?',
    back: 'Steam has absorbed latent heat of vaporization (22.6 × 10⁵ J/kg). Thus, steam particles carry extra energy than boiling water at the same temperature.',
    hint: 'Latent heat of vaporization',
    category: 'definition'
  },
  {
    id: 'fc-c9-2',
    classLevel: 9,
    subject: 'Science',
    chapter: 'Motion',
    front: 'State the 3 Equations of Uniformly Accelerated Motion.',
    back: '1. v = u + at\n2. s = ut + ½ at²\n3. v² = u² + 2as',
    hint: 'Kinematic trio',
    category: 'formula'
  },
  {
    id: 'fc-c9-3',
    classLevel: 9,
    subject: 'Mathematics',
    chapter: 'Polynomials',
    front: 'If x + y + z = 0, what is the value of x³ + y³ + z³?',
    back: 'x³ + y³ + z³ = 3xyz. (Conditional algebraic identity).',
    hint: '3 × product of terms',
    category: 'formula'
  },

  // Class 10 Flashcards
  {
    id: 'fc-1',
    classLevel: 10,
    subject: 'Science',
    chapter: 'Chemical Reactions',
    front: 'What is the chemical formula and common name of Slaked Lime?',
    back: 'Ca(OH)₂ (Calcium Hydroxide). Formed by adding water to Quicklime (CaO) in an exothermic reaction.',
    hint: 'Formed during whitewashing reaction',
    category: 'reaction'
  },
  {
    id: 'fc-2',
    classLevel: 10,
    subject: 'Science',
    chapter: 'Light',
    front: 'State the sign of Focal Length (f) for Concave & Convex optical devices.',
    back: 'Focal length is ALWAYS NEGATIVE for Concave (mirror & lens), and ALWAYS POSITIVE for Convex (mirror & lens).',
    hint: 'Think "C-Cave = Negative cave"',
    category: 'rule'
  },
  {
    id: 'fc-3',
    classLevel: 10,
    subject: 'Science',
    chapter: 'Electricity',
    front: 'What is Ohm\'s Law and its mathematical condition?',
    back: 'V = I · R. Potential difference is proportional to current, provided TEMPERATURE and physical conditions remain constant.',
    hint: 'V = IR at constant temperature',
    category: 'definition'
  },
  {
    id: 'fc-4',
    classLevel: 10,
    subject: 'Mathematics',
    chapter: 'Real Numbers',
    front: 'What is the relationship between HCF, LCM, and two numbers a and b?',
    back: 'HCF(a, b) × LCM(a, b) = a × b. (Only valid for TWO numbers, not three!).',
    hint: 'Product of HCF & LCM',
    category: 'formula'
  },
  {
    id: 'fc-5',
    classLevel: 10,
    subject: 'Mathematics',
    chapter: 'Trigonometry',
    front: 'What are the 3 fundamental Pythagorean Trigonometric Identities?',
    back: '1. sin²θ + cos²θ = 1\n2. sec²θ - tan²θ = 1\n3. cosec²θ - cot²θ = 1',
    hint: 'sin²+cos², sec²-tan², cosec²-cot²',
    category: 'formula'
  },
  {
    id: 'fc-6',
    classLevel: 10,
    subject: 'Science',
    chapter: 'Life Processes',
    front: 'What are the components of Gastric Juice in the human stomach?',
    back: '1. Hydrochloric Acid (HCl): Acidic medium & disinfectant.\n2. Pepsin: Protein digestion enzyme.\n3. Mucus: Protects inner stomach wall.',
    hint: 'Acid + Enzyme + Protector',
    category: 'definition'
  },

  // Class 11 Flashcards
  {
    id: 'fc-c11-1',
    classLevel: 11,
    subject: 'Physics',
    chapter: 'Motion in a Plane',
    front: 'What is the maximum horizontal range of a projectile and at what angle is it achieved?',
    back: 'R_max = u² / g, achieved at projection angle θ = 45° (since sin 2(45°) = sin 90° = 1).',
    hint: 'Angle of 45 degrees',
    category: 'formula'
  },
  {
    id: 'fc-c11-2',
    classLevel: 11,
    subject: 'Chemistry',
    chapter: 'Structure of Atom',
    front: 'State Heisenberg\'s Uncertainty Principle and its formula.',
    back: 'It is impossible to measure simultaneously both the exact position (x) and exact momentum (p) of a subatomic particle: Δx · Δp ≥ h / (4π).',
    hint: 'Product ≥ h / 4π',
    category: 'definition'
  },
  {
    id: 'fc-c11-3',
    classLevel: 11,
    subject: 'Chemistry',
    chapter: 'Some Basic Concepts',
    front: 'Why is Molality (m) preferred over Molarity (M) in high-accuracy studies?',
    back: 'Molality is based on MASS of solvent (kg), which does NOT change with temperature. Molarity depends on volume, which expands/contracts with temperature.',
    hint: 'Temperature independence of mass',
    category: 'rule'
  },

  // Class 12 Flashcards
  {
    id: 'fc-c12-1',
    classLevel: 12,
    subject: 'Physics',
    chapter: 'Electric Charges and Fields',
    front: 'What is Gauss\'s Law in electrostatics?',
    back: 'The total electric flux through any closed Gaussian surface in vacuum equals 1/ε₀ times the total enclosed charge: ∮ E⃗ · dA⃗ = q_enclosed / ε₀.',
    hint: 'Flux = q_enc / ε₀',
    category: 'rule'
  },
  {
    id: 'fc-c12-2',
    classLevel: 12,
    subject: 'Physics',
    chapter: 'Current Electricity',
    front: 'On what conservation laws are Kirchhoff\'s First and Second rules based?',
    back: '1. Junction Rule (First Law) is based on Conservation of ELECTRIC CHARGE.\n2. Loop Rule (Second Law) is based on Conservation of ENERGY.',
    hint: 'Charge and Energy',
    category: 'rule'
  },
  {
    id: 'fc-c12-3',
    classLevel: 12,
    subject: 'Chemistry',
    chapter: 'Solutions',
    front: 'What is the van ’t Hoff factor (i) for complete dissociation of CaCl₂?',
    back: 'i = 3. CaCl₂ dissociates into 1 Ca²⁺ ion and 2 Cl⁻ ions (Total 3 ions): i = 1 + (n - 1)α = 1 + (3 - 1)(1) = 3.',
    hint: 'Total ions in one unit',
    category: 'formula'
  },
  {
    id: 'fc-c12-4',
    classLevel: 12,
    subject: 'Mathematics',
    chapter: 'Matrices & Determinants',
    front: 'What is the determinant of adj A for an n × n matrix of determinant |A|?',
    back: '|adj A| = |A|^(n - 1). For a 3 × 3 matrix, |adj A| = |A|².',
    hint: '|A| raised to power (n - 1)',
    category: 'formula'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Class 9 Questions
  {
    id: 'q-c9-1',
    classLevel: 9,
    subject: 'Science',
    chapter: 'Matter in Our Surroundings',
    questionType: 'MCQ',
    questionText: 'Which of the following conditions will increase the rate of evaporation of water?',
    options: [
      'Increase in temperature and increase in surface area',
      'Decrease in temperature and increase in surface area',
      'Increase in humidity and increase in temperature',
      'Adding common salt and decreasing wind speed'
    ],
    correctIndex: 0,
    explanation: 'Higher temperature provides greater kinetic energy to surface particles, and larger surface area provides more opportunity for particles to escape into the vapor phase, accelerating evaporation.',
    boardReference: 'Class 9 NCERT Exam Pattern'
  },

  // Class 10 Questions
  {
    id: 'q1',
    classLevel: 10,
    subject: 'Science',
    chapter: 'Chemical Reactions',
    questionType: 'MCQ',
    questionText: 'Which of the following is an example of a thermal decomposition reaction?',
    options: [
      '2H₂ + O₂ → 2H₂O',
      '2FeSO₄(s) --Heat--> Fe₂O₃(s) + SO₂(g) + SO₃(g)',
      'Zn + CuSO₄ → ZnSO₄ + Cu',
      'NaOH + HCl → NaCl + H₂O'
    ],
    correctIndex: 1,
    explanation: 'Ferrous sulfate crystals on heating break down into ferric oxide (solid), sulfur dioxide and sulfur trioxide gases. This requires thermal energy to decompose a single reactant into multiple products.',
    boardReference: 'CBSE 2023 Board Exam 1-Mark'
  },
  {
    id: 'q2',
    classLevel: 10,
    subject: 'Science',
    chapter: 'Electricity',
    questionType: 'MCQ',
    questionText: 'A cylindrical wire of length L and cross-sectional area A has resistance R. If it is stretched to double its length (2L), its new resistance will be:',
    options: ['2R', '4R', 'R/2', 'R/4'],
    correctIndex: 1,
    explanation: 'When a wire is stretched to double its length, its volume remains constant: V = A × L = A\' × 2L ⇒ A\' = A/2. New resistance R\' = ρ(2L)/(A/2) = 4 [ρ(L/A)] = 4R.',
    boardReference: 'CBSE Exemplar & Board Frequent Numerical'
  },
  {
    id: 'q4',
    classLevel: 10,
    subject: 'Mathematics',
    chapter: 'Trigonometry',
    questionType: 'MCQ',
    questionText: 'If sec θ + tan θ = 4, then what is the value of sec θ - tan θ?',
    options: ['4', '1/4', '2', '0'],
    correctIndex: 1,
    explanation: 'We know the identity sec²θ - tan²θ = 1 ⇒ (sec θ - tan θ)(sec θ + tan θ) = 1. Therefore (sec θ - tan θ) = 1 / (sec θ + tan θ) = 1/4.',
    boardReference: 'CBSE Standard Mathematics Board Paper'
  },

  // Class 11 Questions
  {
    id: 'q-c11-1',
    classLevel: 11,
    subject: 'Physics',
    chapter: 'Motion in a Plane',
    questionType: 'MCQ',
    questionText: 'Two balls are projected at angles of 30° and 60° with the horizontal with the same initial speed u. The ratio of their horizontal ranges is:',
    options: ['1 : 1', '1 : √3', '√3 : 1', '1 : 2'],
    correctIndex: 0,
    explanation: 'For any two complementary angles (θ and 90° - θ), horizontal range is identical because sin 2(30°) = sin 60° and sin 2(60°) = sin 120° = sin 60°. Hence the ratio is 1 : 1.',
    boardReference: 'Class 11 Annual Exam & JEE Main Pattern'
  },
  {
    id: 'q-c11-2',
    classLevel: 11,
    subject: 'Chemistry',
    chapter: 'Structure of Atom',
    questionType: 'MCQ',
    questionText: 'Which spectral series in the hydrogen spectrum lies strictly in the visible region of electromagnetic radiation?',
    options: ['Lyman series', 'Balmer series', 'Paschen series', 'Brackett series'],
    correctIndex: 1,
    explanation: 'Balmer series involves electronic transitions from higher energy levels to n₁ = 2, producing radiation of wavelengths falling in the visible light spectrum (400 nm - 700 nm). Lyman is UV, Paschen/Brackett are IR.',
    boardReference: 'Class 11 Chemistry Annual Paper'
  },

  // Class 12 Questions
  {
    id: 'q-c12-1',
    classLevel: 12,
    subject: 'Physics',
    chapter: 'Electric Charges and Fields',
    questionType: 'MCQ',
    questionText: 'An electric dipole of moment p⃗ is placed in a uniform electric field E⃗. The net translational force and maximum torque experienced by it are respectively:',
    options: [
      'Net force = 0, Max torque = pE',
      'Net force = pE, Max torque = 0',
      'Net force = 2pE, Max torque = pE/2',
      'Net force = 0, Max torque = 0'
    ],
    correctIndex: 0,
    explanation: 'In a uniform electric field, the equal and opposite forces (+qE and -qE) on the two charges cancel each other, so Net Force = 0. The torque τ = p E sin θ is maximum when θ = 90°, giving τ_max = p E.',
    boardReference: 'CBSE 2024 Board Exam Section A'
  },
  {
    id: 'q-c12-2',
    classLevel: 12,
    subject: 'Chemistry',
    chapter: 'Chemical Kinetics',
    questionType: 'MCQ',
    questionText: 'For a first-order reaction, if the initial concentration of reactant is doubled, its half-life (t₁/₂) will:',
    options: ['Be doubled', 'Be halved', 'Remain unchanged', 'Become four times'],
    correctIndex: 2,
    explanation: 'For a first-order reaction, t₁/₂ = 0.693 / k. The half-life is completely independent of the initial concentration of the reactant, so it remains unchanged.',
    boardReference: 'CBSE 2023 Chemistry Board Paper'
  },
  {
    id: 'q-c12-3',
    classLevel: 12,
    subject: 'Mathematics',
    chapter: 'Matrices & Determinants',
    questionType: 'MCQ',
    questionText: 'If A is a 3 × 3 non-singular square matrix such that |A| = 5, then the value of |adj A| is:',
    options: ['5', '25', '125', '1/5'],
    correctIndex: 1,
    explanation: 'We know the standard matrix theorem |adj A| = |A|^(n - 1). Here order n = 3, so |adj A| = |A|^(3 - 1) = |A|² = 5² = 25.',
    boardReference: 'CBSE 2024 Standard Math Paper'
  }
];
