import SafeArea from '@src/components/SafeArea';
import ToolBar from '@src/components/ToolBar';

import {RouteProp} from '@react-navigation/native';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {RootStacksParams, RootStacksProp} from '..';
import Controller from './components/Controller';
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'CourseDetail'>;
}

const CourseDetail: React.FC<MyProps> = props => {
  const {navigation, route} = props;
  const {theme} = useStore();
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // var sound = new Sound(route.params.course.audio, Sound.DOCUMENT, error => {
  //   if (error) {
  //     console.log('Sound init faild: ', error);
  //   }
  //   setDuration(sound.getDuration());
  // });

  const onPlayPress = () => {};
  const onSeek = (n: number) => {};

  // https://www.nhk.or.jp/lesson/zh/mp3/audio_lesson_03.mp3 对
  // https://www.nhk.or.jp/lesson/zh/mp3/audio_lesson_04.mp3
  useEffect(() => {
    console.log('Source audio: ', route.params.course.audio);
    (async () => {
      let file = `${RNFS.DocumentDirectoryPath}/course_audio_${route.params.course.id}.mp3`;
      console.log('File path: ', file);
      let isFile = await RNFS.exists(file);
      if (isFile) {
        console.log(file);
      } else {
        RNFS.downloadFile({
          // headers: {':authority': 'www.nhk.or.jp'},
          fromUrl: route.params.course.audio,
          // fromUrl: 'https://cloud.cctv3.net/jp-mobile/course.json',
          toFile: file,
          begin: result => {
            setDownloading(true);
            console.log('Downloading: ', result);
          },
          progress: result => {
            console.log('Downloading: ', result);
          },
        })
          .promise.then(response => {
            setDownloading(false);
            console.log('Downloaded: ', response);
          })
          .catch(error => {
            console.log('Download error: ', error);
          });
      }
    })();
    return function () {};
  }, []);

  return (
    <SafeArea isAvoidBottomSpace={true}>
      <ToolBar
        title={route.params.course.message.jp}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.view}>
        <ScrollView>
          <Image
            source={{uri: route.params.course.thumbnails}}
            style={{width: x.WIDTH, height: (x.WIDTH * 9) / 16}}
          />
        </ScrollView>
        <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <Controller
            duration={duration}
            onPlayPress={onPlayPress}
            onSeek={onSeek}
            progress={progress}
            playing={playing}
          />
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: x.Color.PAGE,
    position: 'relative',
  },
});

export default CourseDetail;
