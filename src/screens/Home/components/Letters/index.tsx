import Button from '@src/components/Button';
import JPText from '@src/components/JPText';
import Services from '@src/constants/Services';
import {Letter} from '@src/constants/Types';

import x from '@src/constants/x';
import {RootStacksProp} from '@src/screens';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import FastImage from 'react-native-fast-image';

interface MyProps {
  navigation?: RootStacksProp;
}

const HomeLetters: React.FC<MyProps> = props => {
  const {navigation} = props;
  const {theme, font} = useStore();
  const [letters, setLetters] = useState<Letter[]>([]);
  const [index, setIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isPreview, setIsPreview] = useState(true);
  const [isRecite, setIsRecite] = useState(false);

  useEffect(() => {
    (async () => {
      setIndex(0);
      let datas: Letter[] = await loadJPLetters();
      let initLetters = lettersFormatter(datas.slice(0, 46));
      let shuffleLetters = lettersFormatter(
        [...datas.slice(0, 46)].sort((a, b) => Math.random() - 0.5),
      );
      setLetters(isShuffle ? shuffleLetters : initLetters);
    })();
    return function () {};
  }, [isShuffle]);

  const loadJPLetters = async () => {
    return await new Services().selectJPLetters();
  };

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
        {/* <TouchableOpacity
          activeOpacity={x.Touchable.OPACITY}
          onPress={() => {}}>
          <Text style={{fontSize: x.scale(14), color: theme}}>练习 →</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{height: 6}} />
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 12}} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flex: 6,
          }}>
          {letters.map((it, i) => (
            <TouchableOpacity
              activeOpacity={x.Touchable.OPACITY}
              key={i}
              style={[
                styles.letterContainer,
                {
                  borderColor: index == i ? theme : 'white',
                },
              ]}
              onPress={() => setIndex(it == null ? index : i)}>
              {it ? (
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  {isRecite ? (
                    <JPText
                      style={{
                        fontSize: x.scale(24),
                      }}>
                      {it.hiragana.letter}
                    </JPText>
                  ) : (
                    <FastImage
                      source={{uri: it.hiragana.src}}
                      style={{
                        width: x.scale(42),
                        height: x.scale(49),
                      }}
                    />
                  )}
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{justifyContent: 'space-between', flex: 4}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#999'}}>平假名</Text>
            {letters?.[index] ? (
              <Image
                style={[
                  {
                    width: x.scale(90),
                    height: x.scale(90),
                  },
                  isPreview ? {} : {tintColor: '#eee'},
                ]}
                source={{uri: letters[index].hiragana.detailSrc}}
              />
            ) : null}
            <View style={{height: 12}} />
            <Text style={{color: '#999'}}>片假名</Text>
            {letters?.[index] ? (
              <Image
                style={[
                  {width: x.scale(90), height: x.scale(90)},
                  isPreview ? {} : {tintColor: '#eee'},
                ]}
                source={{uri: letters[index].katakana.detailSrc}}
              />
            ) : null}
          </View>

          <View>
            <Line
              theme={theme}
              isChecked={isShuffle}
              title={'打乱顺序'}
              onPress={() => setIsShuffle(!isShuffle)}
            />
            <View style={{height: 12}} />
            <Line
              theme={theme}
              isChecked={isRecite}
              title={'背诵模式'}
              onPress={() => setIsRecite(!isRecite)}
            />
            <View style={{height: 12}} />
            <Line
              theme={theme}
              isChecked={isPreview}
              title={'开启预览'}
              onPress={() => setIsPreview(!isPreview)}
            />
            <View style={{height: 12}} />
            <FillButton
              title={'默写大PK'}
              onPress={() => {
                navigation.navigate('LettersGame');
              }}
              theme={theme}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

interface FillButtonProps {
  theme: string;
  onPress: () => void;
  title: string;
}
const FillButton = (props: FillButtonProps) => {
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      textStyle={{color: 'white', fontSize: x.scale(14)}}
      style={{
        backgroundColor: props.theme,
        marginHorizontal: 12,
        height: x.scale(36),
        borderRadius: 5,
      }}
    />
  );
};

interface LineProps {
  title: string;
  theme: string;
  isChecked: boolean;
  onPress: (isChecked: boolean) => void;
}

const Line = (props: LineProps) => {
  const {title, theme, isChecked, onPress} = props;
  return (
    <View
      style={[x.Styles.rowCenter('space-between'), {paddingHorizontal: 12}]}>
      <Text style={{color: '#333', fontSize: x.scale(14)}}>{title}</Text>
      <BouncyCheckbox
        size={x.scale(24)}
        disableText={true}
        fillColor={theme}
        unFillColor="#FFFFFF"
        isChecked={isChecked}
        onPress={props.onPress}
      />
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
  letterContainer: {
    width: ((x.WIDTH - 24 - 12) * 0.6) / 5,
    height: (((x.WIDTH - 24 - 12) * 0.6) / 5 / 6) * 7,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
});

export default HomeLetters;
