export interface Tribute {
  id: string;
  babyName: string;
  dateOrMonth: string;
  message: string;
  parentsName?: string;
  symbol: 'mariposa' | 'estrella' | 'corazon' | 'flor' | 'vela';
  candlesCount: number;
  timestamp: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export type ActiveModal = 
  | null 
  | 'first-steps' 
  | 'join-circle' 
  | 'how-to-accompany' 
  | 'ley-estrella' 
  | 'memory-box' 
  | 'professionals' 
  | 'donate' 
  | 'add-tribute'
  | 'contact';
