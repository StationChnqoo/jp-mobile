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
