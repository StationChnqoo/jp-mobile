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

export default [
  {
    index: 1,
    id: 'a',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/a.png',
      letter: 'ア',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/a.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/a.png',
      letter: 'あ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/a.png',
    },
  },
  {
    index: 2,
    id: 'i',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/i.png',
      letter: 'イ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/i.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/i.png',
      letter: 'い',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/i.png',
    },
  },
  {
    index: 3,
    id: 'u',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/u.png',
      letter: 'ウ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/u.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/u.png',
      letter: 'う',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/u.png',
    },
  },
  {
    index: 4,
    id: 'e',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/e.png',
      letter: 'エ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/e.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/e.png',
      letter: 'え',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/e.png',
    },
  },
  {
    index: 5,
    id: 'o',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/o.png',
      letter: 'オ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/o.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/o.png',
      letter: 'お',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/o.png',
    },
  },
  {
    index: 6,
    id: 'ka',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ka.png',
      letter: 'カ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ka.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ka.png',
      letter: 'か',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ka.png',
    },
  },
  {
    index: 7,
    id: 'ki',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ki.png',
      letter: 'キ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ki.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ki.png',
      letter: 'き',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ki.png',
    },
  },
  {
    index: 8,
    id: 'ku',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ku.png',
      letter: 'ク',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ku.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ku.png',
      letter: 'く',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ku.png',
    },
  },
  {
    index: 9,
    id: 'ke',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ke.png',
      letter: 'ケ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ke.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ke.png',
      letter: 'け',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ke.png',
    },
  },
  {
    index: 10,
    id: 'ko',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ko.png',
      letter: 'コ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ko.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ko.png',
      letter: 'こ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ko.png',
    },
  },
  {
    index: 11,
    id: 'sa',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/sa.png',
      letter: 'サ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/sa.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/sa.png',
      letter: 'さ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/sa.png',
    },
  },
  {
    index: 12,
    id: 'shi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/shi.png',
      letter: 'シ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/shi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/shi.png',
      letter: 'し',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/shi.png',
    },
  },
  {
    index: 13,
    id: 'su',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/su.png',
      letter: 'ス',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/su.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/su.png',
      letter: 'す',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/su.png',
    },
  },
  {
    index: 14,
    id: 'se',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/se.png',
      letter: 'セ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/se.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/se.png',
      letter: 'せ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/se.png',
    },
  },
  {
    index: 15,
    id: 'so',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/so.png',
      letter: 'ソ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/so.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/so.png',
      letter: 'そ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/so.png',
    },
  },
  {
    index: 16,
    id: 'ta',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ta.png',
      letter: 'タ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ta.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ta.png',
      letter: 'た',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ta.png',
    },
  },
  {
    index: 17,
    id: 'chi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/chi.png',
      letter: 'チ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/chi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/chi.png',
      letter: 'ち',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/chi.png',
    },
  },
  {
    index: 18,
    id: 'tsu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/tsu.png',
      letter: 'ツ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/tsu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/tsu.png',
      letter: 'つ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/tsu.png',
    },
  },
  {
    index: 19,
    id: 'te',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/te.png',
      letter: 'テ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/te.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/te.png',
      letter: 'て',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/te.png',
    },
  },
  {
    index: 20,
    id: 'to',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/to.png',
      letter: 'ト',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/to.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/to.png',
      letter: 'と',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/to.png',
    },
  },
  {
    index: 21,
    id: 'na',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/na.png',
      letter: 'ナ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/na.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/na.png',
      letter: 'な',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/na.png',
    },
  },
  {
    index: 22,
    id: 'ni',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ni.png',
      letter: 'ニ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ni.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ni.png',
      letter: 'に',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ni.png',
    },
  },
  {
    index: 23,
    id: 'nu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/nu.png',
      letter: 'ヌ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/nu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/nu.png',
      letter: 'ぬ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/nu.png',
    },
  },
  {
    index: 24,
    id: 'ne',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ne.png',
      letter: 'ネ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ne.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ne.png',
      letter: 'ね',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ne.png',
    },
  },
  {
    index: 25,
    id: 'no',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/no.png',
      letter: 'ノ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/no.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/no.png',
      letter: 'の',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/no.png',
    },
  },
  {
    index: 26,
    id: 'ha',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ha.png',
      letter: 'ハ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ha.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ha.png',
      letter: 'は',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ha.png',
    },
  },
  {
    index: 27,
    id: 'hi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/hi.png',
      letter: 'ヒ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/hi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/hi.png',
      letter: 'ひ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/hi.png',
    },
  },
  {
    index: 28,
    id: 'fu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/fu.png',
      letter: 'フ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/fu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/fu.png',
      letter: 'ふ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/fu.png',
    },
  },
  {
    index: 29,
    id: 'he',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/he.png',
      letter: 'ヘ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/he.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/he.png',
      letter: 'へ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/he.png',
    },
  },
  {
    index: 30,
    id: 'ho',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ho.png',
      letter: 'ホ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ho.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ho.png',
      letter: 'ほ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ho.png',
    },
  },
  {
    index: 31,
    id: 'ma',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ma.png',
      letter: 'マ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ma.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ma.png',
      letter: 'ま',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ma.png',
    },
  },
  {
    index: 32,
    id: 'mi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/mi.png',
      letter: 'ミ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/mi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/mi.png',
      letter: 'み',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/mi.png',
    },
  },
  {
    index: 33,
    id: 'mu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/mu.png',
      letter: 'ム',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/mu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/mu.png',
      letter: 'む',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/mu.png',
    },
  },
  {
    index: 34,
    id: 'me',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/me.png',
      letter: 'メ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/me.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/me.png',
      letter: 'め',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/me.png',
    },
  },
  {
    index: 35,
    id: 'mo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/mo.png',
      letter: 'モ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/mo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/mo.png',
      letter: 'も',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/mo.png',
    },
  },
  {
    index: 36,
    id: 'ya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ya.png',
      letter: 'ヤ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ya.png',
      letter: 'や',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ya.png',
    },
  },
  {
    index: 37,
    id: 'yu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/yu.png',
      letter: 'ユ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/yu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/yu.png',
      letter: 'ゆ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/yu.png',
    },
  },
  {
    index: 38,
    id: 'yo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/yo.png',
      letter: 'ヨ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/yo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/yo.png',
      letter: 'よ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/yo.png',
    },
  },
  {
    index: 39,
    id: 'ra',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ra.png',
      letter: 'ラ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ra.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ra.png',
      letter: 'ら',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ra.png',
    },
  },
  {
    index: 40,
    id: 'ri',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ri.png',
      letter: 'リ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ri.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ri.png',
      letter: 'り',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ri.png',
    },
  },
  {
    index: 41,
    id: 'ru',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ru.png',
      letter: 'ル',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ru.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ru.png',
      letter: 'る',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ru.png',
    },
  },
  {
    index: 42,
    id: 're',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/re.png',
      letter: 'レ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/re.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/re.png',
      letter: 'れ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/re.png',
    },
  },
  {
    index: 43,
    id: 'ro',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ro.png',
      letter: 'ロ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ro.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ro.png',
      letter: 'ろ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ro.png',
    },
  },
  {
    index: 44,
    id: 'wa',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/wa.png',
      letter: 'ワ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/wa.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/wa.png',
      letter: 'わ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/wa.png',
    },
  },
  {
    index: 45,
    id: 'wo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/wo.png',
      letter: 'ヲ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/wo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/wo.png',
      letter: 'を',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/wo.png',
    },
  },
  {
    index: 46,
    id: 'n',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/n.png',
      letter: 'ン',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/n.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/n.png',
      letter: 'ん',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/n.png',
    },
  },
  {
    index: 47,
    id: 'ga',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ga.png',
      letter: 'ガ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ga.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ga.png',
      letter: 'が',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ga.png',
    },
  },
  {
    index: 48,
    id: 'gi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/gi.png',
      letter: 'ギ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/gi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/gi.png',
      letter: 'ぎ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/gi.png',
    },
  },
  {
    index: 49,
    id: 'gu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/gu.png',
      letter: 'グ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/gu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/gu.png',
      letter: 'ぐ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/gu.png',
    },
  },
  {
    index: 50,
    id: 'ge',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ge.png',
      letter: 'ゲ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ge.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ge.png',
      letter: 'げ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ge.png',
    },
  },
  {
    index: 51,
    id: 'go',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/go.png',
      letter: 'ゴ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/go.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/go.png',
      letter: 'ご',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/go.png',
    },
  },
  {
    index: 52,
    id: 'za',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/za.png',
      letter: 'ザ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/za.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/za.png',
      letter: 'ざ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/za.png',
    },
  },
  {
    index: 53,
    id: 'ji',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ji.png',
      letter: 'ジ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ji.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ji.png',
      letter: 'じ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ji.png',
    },
  },
  {
    index: 54,
    id: 'zu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/zu.png',
      letter: 'ズ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/zu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/zu.png',
      letter: 'ず',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/zu.png',
    },
  },
  {
    index: 55,
    id: 'ze',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ze.png',
      letter: 'ゼ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ze.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ze.png',
      letter: 'ぜ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ze.png',
    },
  },
  {
    index: 56,
    id: 'zo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/zo.png',
      letter: 'ゾ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/zo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/zo.png',
      letter: 'ぞ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/zo.png',
    },
  },
  {
    index: 57,
    id: 'da',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/da.png',
      letter: 'ダ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/da.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/da.png',
      letter: 'だ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/da.png',
    },
  },
  {
    index: 58,
    id: 'ji',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ji.png',
      letter: 'ジ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ji.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ji.png',
      letter: 'じ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ji.png',
    },
  },
  {
    index: 59,
    id: 'zu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/zu.png',
      letter: 'ズ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/zu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/zu.png',
      letter: 'ず',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/zu.png',
    },
  },
  {
    index: 60,
    id: 'de',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/de.png',
      letter: 'デ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/de.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/de.png',
      letter: 'で',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/de.png',
    },
  },
  {
    index: 61,
    id: 'do',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/do.png',
      letter: 'ド',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/do.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/do.png',
      letter: 'ど',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/do.png',
    },
  },
  {
    index: 62,
    id: 'ba',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ba.png',
      letter: 'バ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ba.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ba.png',
      letter: 'ば',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ba.png',
    },
  },
  {
    index: 63,
    id: 'bi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/bi.png',
      letter: 'ビ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/bi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/bi.png',
      letter: 'び',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/bi.png',
    },
  },
  {
    index: 64,
    id: 'bu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/bu.png',
      letter: 'ブ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/bu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/bu.png',
      letter: 'ぶ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/bu.png',
    },
  },
  {
    index: 65,
    id: 'be',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/be.png',
      letter: 'ベ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/be.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/be.png',
      letter: 'べ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/be.png',
    },
  },
  {
    index: 66,
    id: 'bo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/bo.png',
      letter: 'ボ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/bo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/bo.png',
      letter: 'ぼ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/bo.png',
    },
  },
  {
    index: 67,
    id: 'pa',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pa.png',
      letter: 'パ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pa.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pa.png',
      letter: 'ぱ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pa.png',
    },
  },
  {
    index: 68,
    id: 'pi',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pi.png',
      letter: 'ピ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pi.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pi.png',
      letter: 'ぴ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pi.png',
    },
  },
  {
    index: 69,
    id: 'pu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pu.png',
      letter: 'プ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pu.png',
      letter: 'ぷ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pu.png',
    },
  },
  {
    index: 70,
    id: 'pe',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pe.png',
      letter: 'ペ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pe.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pe.png',
      letter: 'ぺ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pe.png',
    },
  },
  {
    index: 71,
    id: 'po',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/po.png',
      letter: 'ポ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/po.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/po.png',
      letter: 'ぽ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/po.png',
    },
  },
  {
    index: 72,
    id: 'kya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/kya.png',
      letter: 'キャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/kya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/kya.png',
      letter: 'きゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/kya.png',
    },
  },
  {
    index: 73,
    id: 'kyu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/kyu.png',
      letter: 'キュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/kyu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/kyu.png',
      letter: 'きゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/kyu.png',
    },
  },
  {
    index: 74,
    id: 'kyo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/kyo.png',
      letter: 'キョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/kyo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/kyo.png',
      letter: 'きょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/kyo.png',
    },
  },
  {
    index: 75,
    id: 'sha',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/sha.png',
      letter: 'シャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/sha.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/sha.png',
      letter: 'しゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/sha.png',
    },
  },
  {
    index: 76,
    id: 'shu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/shu.png',
      letter: 'シュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/shu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/shu.png',
      letter: 'しゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/shu.png',
    },
  },
  {
    index: 77,
    id: 'sho',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/sho.png',
      letter: 'ショ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/sho.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/sho.png',
      letter: 'しょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/sho.png',
    },
  },
  {
    index: 78,
    id: 'cha',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/cha.png',
      letter: 'チャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/cha.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/cha.png',
      letter: 'ちゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/cha.png',
    },
  },
  {
    index: 79,
    id: 'chu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/chu.png',
      letter: 'チュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/chu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/chu.png',
      letter: 'ちゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/chu.png',
    },
  },
  {
    index: 80,
    id: 'cho',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/cho.png',
      letter: 'チョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/cho.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/cho.png',
      letter: 'ちょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/cho.png',
    },
  },
  {
    index: 81,
    id: 'nya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/nya.png',
      letter: 'ニャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/nya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/nya.png',
      letter: 'にゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/nya.png',
    },
  },
  {
    index: 82,
    id: 'nyu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/nyu.png',
      letter: 'ニュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/nyu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/nyu.png',
      letter: 'にゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/nyu.png',
    },
  },
  {
    index: 83,
    id: 'nyo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/nyo.png',
      letter: 'ニョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/nyo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/nyo.png',
      letter: 'にょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/nyo.png',
    },
  },
  {
    index: 84,
    id: 'hya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/hya.png',
      letter: 'ヒャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/hya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/hya.png',
      letter: 'ひゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/hya.png',
    },
  },
  {
    index: 85,
    id: 'hyu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/hyu.png',
      letter: 'ヒュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/hyu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/hyu.png',
      letter: 'ひゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/hyu.png',
    },
  },
  {
    index: 86,
    id: 'hyo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/hyo.png',
      letter: 'ヒョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/hyo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/hyo.png',
      letter: 'ひょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/hyo.png',
    },
  },
  {
    index: 87,
    id: 'mya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/mya.png',
      letter: 'ミャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/mya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/mya.png',
      letter: 'みゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/mya.png',
    },
  },
  {
    index: 88,
    id: 'myu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/myu.png',
      letter: 'ミュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/myu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/myu.png',
      letter: 'みゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/myu.png',
    },
  },
  {
    index: 89,
    id: 'myo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/myo.png',
      letter: 'ミョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/myo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/myo.png',
      letter: 'みょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/myo.png',
    },
  },
  {
    index: 90,
    id: 'rya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/rya.png',
      letter: 'リャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/rya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/rya.png',
      letter: 'りゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/rya.png',
    },
  },
  {
    index: 91,
    id: 'ryu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ryu.png',
      letter: 'リュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ryu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ryu.png',
      letter: 'りゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ryu.png',
    },
  },
  {
    index: 92,
    id: 'ryo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ryo.png',
      letter: 'リョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ryo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ryo.png',
      letter: 'りょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ryo.png',
    },
  },
  {
    index: 93,
    id: 'gya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/gya.png',
      letter: 'ギャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/gya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/gya.png',
      letter: 'ぎゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/gya.png',
    },
  },
  {
    index: 94,
    id: 'gyu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/gyu.png',
      letter: 'ギュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/gyu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/gyu.png',
      letter: 'ぎゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/gyu.png',
    },
  },
  {
    index: 95,
    id: 'gyo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/gyo.png',
      letter: 'ギョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/gyo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/gyo.png',
      letter: 'ぎょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/gyo.png',
    },
  },
  {
    index: 96,
    id: 'ja',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ja.png',
      letter: 'ジャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ja.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ja.png',
      letter: 'じゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ja.png',
    },
  },
  {
    index: 97,
    id: 'ju',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/ju.png',
      letter: 'ジュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/ju.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/ju.png',
      letter: 'じゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/ju.png',
    },
  },
  {
    index: 98,
    id: 'jo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/jo.png',
      letter: 'ジョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/jo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/jo.png',
      letter: 'じょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/jo.png',
    },
  },
  {
    index: 99,
    id: 'bya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/bya.png',
      letter: 'ビャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/bya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/bya.png',
      letter: 'びゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/bya.png',
    },
  },
  {
    index: 100,
    id: 'byu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/byu.png',
      letter: 'ビュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/byu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/byu.png',
      letter: 'びゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/byu.png',
    },
  },
  {
    index: 101,
    id: 'byo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/byo.png',
      letter: 'ビョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/byo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/byo.png',
      letter: 'びょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/byo.png',
    },
  },
  {
    index: 102,
    id: 'pya',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pya.png',
      letter: 'ピャ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pya.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pya.png',
      letter: 'ぴゃ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pya.png',
    },
  },
  {
    index: 103,
    id: 'pyu',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pyu.png',
      letter: 'ピュ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pyu.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pyu.png',
      letter: 'ぴゅ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pyu.png',
    },
  },
  {
    index: 104,
    id: 'pyo',
    katakana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/pyo.png',
      letter: 'ピョ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/kana/pyo.png',
    },
    hiragana: {
      src: 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/pyo.png',
      letter: 'ぴょ',
      detailSrc:
        'https://www.nhk.or.jp/lesson/assets/images/letters/detail/hira/pyo.png',
    },
  },
] as Letter[];
