export type BoardType = 'CBSE' | 'ICSE' | 'State Board (MSBSHSE/UP/Bihar/Others)';
export type MediumType = 'English' | 'Hindi';
export type ClassLevel = 9 | 10 | 11 | 12;

export interface StudentRegistration {
  fullName: string;
  phone: string;
  email: string;
  board: BoardType;
  medium: MediumType;
  targetYear: string;
  schoolName: string;
  stateCity: string;
  selectedPlan: 'free_trial' | 'handwritten_pro' | 'topper_super_pack';
  subjects: string[];
  couponCode?: string;
}

export interface StudentPass {
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

export interface PyqItem {
  id: string;
  year: string;
  marks: 1 | 2 | 3 | 4 | 5 | 6;
  question: string;
  modelAnswer: string;
  topperTip: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  where: string;
  mnemonicOrTip?: string;
}

export interface HandwrittenNoteEntry {
  id: string;
  chapterId: string;
  subject: string;
  content: string;
  inkColor: 'blue' | 'violet' | 'emerald' | 'amber' | 'crimson' | 'black';
  isStarred?: boolean;
  category: 'Topper Secret' | 'Formula Tip' | 'Mnemonic' | 'Examiner Trap' | 'Personal Note';
  createdAt: string;
  updatedAt?: string;
}

export interface ChapterNote {
  id: string;
  classLevel?: ClassLevel;
  subject: string;
  chapterNumber: number;
  chapterTitle: string;
  tagline: string;
  estimatedBoardWeightage: string;
  summaryPoints: string[];
  topperHandwrittenHighlights: string[];
  examinerTraps: string[];
  formulasAndReactions: FormulaItem[];
  pyqs: PyqItem[];
  mindMapNodes?: { title: string; children: string[] }[];
  customHandwrittenNotes?: HandwrittenNoteEntry[];
  isPremium?: boolean;
}

export interface Flashcard {
  id: string;
  classLevel?: ClassLevel;
  subject: string;
  chapter: string;
  front: string;
  back: string;
  hint: string;
  category: 'formula' | 'definition' | 'reaction' | 'rule';
}

export interface QuizQuestion {
  id: string;
  classLevel?: ClassLevel;
  subject: string;
  chapter: string;
  questionType: 'MCQ' | 'Assertion-Reason';
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  boardReference: string;
}

export type AnimationType =
  | 'circuit'
  | 'ray_optics'
  | 'chemical_reaction'
  | 'math_parabola'
  | 'biology_cell'
  | 'atom_bohr'
  | 'whiteboard';

export interface VideoScene {
  id: string;
  sceneNumber: number;
  title: string;
  durationSec: number;
  animationType: AnimationType;
  narrationText: string;
  subtitles: string;
  keyTerms: string[];
  formulaOrEquation?: string;
  topperTip?: string;
  visualElements: {
    headline: string;
    subtext: string;
    diagramLabel: string;
    highlightBox?: string;
  };
}

export interface ChapterVideo {
  id: string;
  chapterId: string;
  chapterTitle: string;
  classLevel: ClassLevel;
  subject: string;
  totalDurationSec: number;
  thumbnailGradient: string;
  tagline: string;
  scenes: VideoScene[];
}

