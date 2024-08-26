import LETTERS, {Letter} from '@src/constants/letters';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SPACE = [36, 38, 46, 48];

interface MyProps {
  playing: boolean;
  onPress: (lettter: Letter) => void;
  r: number;
  letterChars: string[];
}

const ClickPanel: React.FC<MyProps> = props => {
  const {playing, onPress, r, letterChars} = props;
  const {theme} = useStore();
  const [letters, setLetters] = useState<Letter[]>([]);
  const INIT_LETTERS = [...JSON.parse(JSON.stringify(LETTERS.slice(0, 46)))];

  useEffect(() => {
    setLetters(lettersFormatter(INIT_LETTERS));
    return function () {
      setLetters([]);
    };
  }, []);

  useEffect(() => {
    if (letters.length > 0) {
      let _letters = [...letters];
      for (let i = 0; i < _letters.length; i++) {
        if (SPACE.includes(i)) {
        } else {
          _letters[i].checked = letterChars.find(
            it => it == _letters[i].hiragana.letter,
          )
            ? true
            : false;
        }
      }
      setLetters(_letters);
    }
    return function () {};
  }, [letterChars]);

  const lettersFormatter = (letters: any[]) => {
    let _letters = [...letters];
    let SPACE = [36, 38, 46, 48];
    for (let i = 0; i < SPACE.length; i++) {
      _letters.splice(SPACE[i], 0, null);
    }
    return _letters;
  };

  return (
    <View style={styles.view}>
      <Text style={{fontSize: x.scale(16), color: '#333'}}>请选择</Text>
      <View style={{height: 5}} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {letters.map((it, i) => (
          <TouchableOpacity
            disabled={it ? it?.checked : true}
            activeOpacity={x.Touchable.OPACITY}
            key={i}
            style={styles.letterBig}
            onPress={() => onPress(it)}>
            {it ? (
              <Text
                style={{
                  fontSize: x.scale(20),
                  color: it.checked ? '#ccc' : '#333',
                }}>
                {it.hiragana.letter}
              </Text>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  playText: {
    fontSize: x.scale(14),
    color: '#fff',
    fontWeight: '500',
  },
  playButton: {
    paddingHorizontal: 16,
    borderRadius: 5,
    height: x.scale(32),
  },
  title: {
    fontSize: x.scale(14),
    color: '#333',
  },
  message: {
    fontSize: x.scale(14),
    color: '#666',
  },
  letterBig: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#eee',
    height: ((x.WIDTH - 24 * 3) * 0.6) / 5 - 2,
    width: ((x.WIDTH - 24 * 3) * 0.6) / 5 - 2,
    marginVertical: 2,
    justifyContent: 'center',
  },
  letterSmall: {
    alignItems: 'center',
    width: ((x.WIDTH - 24 * 3) * 0.4) / 5 - 2,
    height: ((x.WIDTH - 24 * 3) * 0.4) / 5 - 2,
    borderWidth: 1,
    marginVertical: 2,
    borderColor: '#999',
    borderRadius: 4,
    justifyContent: 'center',
  },
});

export default ClickPanel;
