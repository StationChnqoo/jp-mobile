import Slider from '@react-native-community/slider';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {
  duration: number;
  onPlayPress: () => void;
  onSeek: (n: number) => void;
  progress: number;
  playing: boolean;
}

const Controller: React.FC<MyProps> = props => {
  const {duration, onPlayPress, progress, onSeek, playing} = props;

  const {theme} = useStore();

  return (
    <View style={[styles.view, x.Styles.CARD]}>
      <View style={[x.Styles.rowCenter('space-between')]}>
        <View style={{flex: 1}}>
          <Slider
            // style={{width: 200, height: 40}}
            disabled={duration == 0}
            style={{margin: 0, padding: 0}}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor="#999"
            maximumTrackTintColor={theme}
            onSlidingComplete={onSeek}
          />
        </View>
        <View style={{width: 12}} />
        <View style={[x.Styles.rowCenter('center'), {width: x.scale(90)}]}>
          <Text style={{fontSize: x.scale(12), color: '#333'}}>
            {`${
              duration
                ? `${x.Time.HHmmss(progress)} / ${x.Time.HHmmss(duration)}`
                : '正在加载录音 ...'
            }`}
          </Text>
        </View>
        <View style={{width: 12}} />
        <TouchableOpacity
          disabled={duration == 0}
          activeOpacity={x.Touchable.OPACITY}
          onPress={onPlayPress}>
          <Image
            source={
              playing
                ? require('@root/assets/play/pause.png')
                : require('@root/assets/play/start.png')
            }
            style={{
              height: x.scale(24),
              width: x.scale(24),
              tintColor: duration == 0 ? '#ccc' : theme,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 32,
  },
});

export default Controller;
