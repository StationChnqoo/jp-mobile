import SafeArea from '@src/components/SafeArea';
import ToolBar from '@src/components/ToolBar';
import LETTERS, {Letter} from '@src/constants/letters';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStacksProp} from '..';
import Score from './components/Score';
import Play from './components/Play';
import {useInterval} from 'ahooks';

interface MyProps {
  navigation?: RootStacksProp;
}

const LettersGame: React.FC<MyProps> = props => {
  const {navigation} = props;
  const {theme} = useStore();
  const [letters, setLetters] = useState<Letter[]>([]);
  const [status, setStatus] = useState(0);
  const [interval, setInterval] = useState<null | undefined | number>(
    undefined,
  );
  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let _letters = [...LETTERS.slice(0, 46)];
    setLetters(lettersFormatter(_letters));
    return function () {};
  }, []);

  const lettersFormatter = (letters: any[]) => {
    let _letters = [...letters];
    let space = [36, 38, 46, 48];
    for (let i = 0; i < space.length; i++) {
      _letters.splice(space[i], 0, null);
    }
    return _letters;
  };

  useInterval(() => {
    setSeconds(t => t + 1);
  }, interval);

  useEffect(() => {
    return function () {
      setInterval(undefined);
    };
  }, []);

  return (
    <SafeArea>
      <ToolBar
        title={'五十音默写大PK'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.view}>
          <Score />
          <View style={{height: 12}} />
          <Play
            seconds={seconds}
            playing={playing}
            onPlayPress={() => {
              if (playing) {
                setPlaying(false);
                setInterval(undefined);
              } else {
                setSeconds(0);
                setInterval(1000);
                setPlaying(true);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: x.Color.PAGE,
  },
});

export default LettersGame;
