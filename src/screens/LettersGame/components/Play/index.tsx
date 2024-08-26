import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LETTERS, {Letter} from '@src/constants/letters';
import ClickPanel from '../ClickPanel';
import PreviewPanel from '../PreviewPanel';
const SPACE = [36, 38, 46, 48];

interface MyProps {
  playing: boolean;
  seconds: number;
  onPlayPress: () => void;
}

const Play: React.FC<MyProps> = props => {
  const {playing, seconds, onPlayPress} = props;
  const {theme} = useStore();
  const [index, setIndex] = useState(0);
  const [letters, setLetters] = useState(Array(50).fill(''));
  const [r, setR] = useState(0);

  const onSmallLetterPress = (i: number) => {
    if (SPACE.includes(i)) {
    } else {
      setIndex(i);
      if (letters[i]) {
        let _letters = [...letters];
        _letters[i] = '';
        setLetters(_letters);
      }
    }
  };

  const onBigLetterPress = (letter: Letter) => {
    let _letters = [...letters];
    _letters[index] = letter.hiragana.letter;
    setLetters(_letters);
  };

  return (
    <View style={styles.view}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 6}}>
          <ClickPanel
            onPress={onBigLetterPress}
            letterChars={letters}
            r={r}
            playing={playing}
          />
        </View>
        <View style={styles.line} />
        <View style={{justifyContent: 'space-between', flex: 4}}>
          <Text style={{fontSize: x.scale(16), color: '#333'}}>预览</Text>
          <View style={{height: 5}} />
          <PreviewPanel
            letters={letters}
            index={index}
            playing={playing}
            onPress={onSmallLetterPress}
          />
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
  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 12,
  },
});

export default Play;
