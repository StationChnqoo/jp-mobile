import LETTERS, {Letter} from '@src/constants/letters';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {}

const WriteLetters: React.FC<MyProps> = props => {
  const {} = props;
  const {theme} = useStore();
  const [letters, setLetters] = useState<Letter[]>([]);

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
  return (
    <View style={styles.view}>
      <View
        style={[x.Styles.rowCenter('space-between'), {paddingHorizontal: 12}]}>
        <Text
          style={{
            fontSize: x.scale(16),
            fontWeight: '500',
          }}>
          五十音图
        </Text>
        <TouchableOpacity
          activeOpacity={x.Touchable.OPACITY}
          onPress={() => {}}>
          <Text style={{fontSize: x.scale(14), color: theme}}>练习 →</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 6}} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: x.WIDTH * 0.6,
        }}>
        {letters.map((it, i) => (
          <TouchableOpacity
            activeOpacity={x.Touchable.OPACITY}
            key={i}
            style={{width: (x.WIDTH - 24) / 5, alignItems: 'center'}}>
            {it ? (
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Image
                  source={{uri: it.hiragana.src}}
                  style={{width: 48, height: 56}}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 12,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});

export default WriteLetters;
