export interface Letter {
  index: number;
  id: String;
  katakana: LetterSrc;
  hiragana: LetterSrc;
  checked?: boolean;
  success?: boolean;
}

export interface LetterSrc {
  letter: string;
  src: string;
  detailSrc: string;
}

export interface Course {
  id: number;
  title: String;
  message: Word;
  thumbnails: string;
  web: string;
  audio: string;
  pdf: string;
  words: Word[];
}

export interface Word {
  cn?: string;
  jp?: string;
  en?: string;
}
