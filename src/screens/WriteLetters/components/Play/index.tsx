import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LETTERS, {Letter} from '@src/constants/letters';

interface MyProps {
  playing: boolean;
  seconds: number;
  onPlayPress: () => void;
}

const Play: React.FC<MyProps> = props => {
  const {playing, seconds, onPlayPress} = props;
  const {theme} = useStore();
  const [letters, setLetters] = useState<Letter[]>([]);
  const [myLetters, setMyLetters] = useState(Array(50).fill(null));
  const [index, setIndex] = useState(0);
  const INIT_LETTERS = [...LETTERS.slice(0, 46)];
  let SPACE = [36, 38, 46, 48];
  useEffect(() => {
    setLetters(lettersFormatter(INIT_LETTERS));
    return function () {};
  }, []);

  const lettersFormatter = (letters: any[]) => {
    let _letters = [...letters];
    let SPACE = [36, 38, 46, 48];
    for (let i = 0; i < SPACE.length; i++) {
      _letters.splice(SPACE[i], 0, null);
    }
    return _letters;
  };

  const onBigLetterPress = (i: number) => {
    let _myLetters = [...myLetters];
    _myLetters[index] = letters[i].hiragana.letter;
    let _letters = [...letters];
    _letters[i].checked = !_letters[i].checked;
    setMyLetters(_myLetters);
    setLetters(_letters);
  };

  const onSmallLetterPress = (i: number) => {
    if (myLetters[i]) {
      let _myLetters = [...myLetters];
      _myLetters[i] = '';
      let _letters = [...letters];
      for (let i = 0; i < _letters.length; i++) {
        if (_letters[i]) {
          _letters[i].checked = _myLetters.includes(
            _letters[i].hiragana.letter,
          );
        }
      }
      setMyLetters(_myLetters);
      setLetters(_letters);
    }
  };

  const findNextIndex = () => {
    let _index = index;
    if (myLetters[index] == '') {
      return _index;
    } else {
      for (let i = 0; i < myLetters.length; i++) {
        if (!myLetters[i] && !SPACE.includes(i)) {
          return i;
        }
      }
      return _index;
    }
  };

  useEffect(() => {
    setIndex(findNextIndex());
    return function () {};
  }, [myLetters]);
  return (
    <View style={styles.view}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 6}}>
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
                onPress={() => onBigLetterPress(i)}>
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

        <View
          style={{width: 1, backgroundColor: '#ccc', marginHorizontal: 12}}
        />
        <View style={{justifyContent: 'space-between', flex: 4}}>
          <Text style={{fontSize: x.scale(16), color: '#333'}}>预览</Text>
          <View style={{height: 5}} />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 6,
            }}>
            {myLetters.map((it, i) => (
              <TouchableOpacity
                activeOpacity={x.Touchable.OPACITY}
                key={i}
                style={[
                  styles.letterSmall,
                  index == i ? {backgroundColor: theme} : {},
                ]}
                onPress={() => {
                  onSmallLetterPress(i);
                }}>
                <Text
                  style={{
                    fontSize: x.scale(16),
                    color: '#333',
                    fontWeight: '500',
                  }}>
                  {it}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{paddingHorizontal: 12}}>
            <View style={x.Styles.rowCenter('space-between')}>
              <Text style={{fontSize: x.scale(16), color: '#333'}}>时间：</Text>
              <Text style={{fontSize: x.scale(16), color: '#666'}}>
                {x.Time.HHmmss(seconds)}
              </Text>
            </View>
            <View style={{height: 10}} />
            <TouchableOpacity
              style={[
                styles.playButton,
                x.Styles.rowCenter('center'),
                {backgroundColor: theme},
              ]}
              activeOpacity={x.Touchable.OPACITY}
              onPress={onPlayPress}>
              <Text style={styles.playText}>
                {playing ? '停止PK' : '开始PK'}
              </Text>
              <View style={{width: 8}} />
              <Image
                source={
                  playing
                    ? require('@root/assets/play/stop.png')
                    : require('@root/assets/play/start.png')
                }
                style={{
                  height: x.scale(18),
                  width: x.scale(18),
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
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

export default Play;
