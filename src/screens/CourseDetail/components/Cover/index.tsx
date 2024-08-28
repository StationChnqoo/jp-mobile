import Button from '@src/components/Button';
import {Course} from '@src/constants/Types';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface MyProps {
  onPdfPreviewPress: () => void;
  course: Course;
}

const Cover: React.FC<MyProps> = props => {
  const {onPdfPreviewPress, course} = props;
  const {theme} = useStore();

  // console.log('Controller playing: ', playing);
  return (
    <View style={[styles.view]}>
      <Image
        resizeMode={'cover'}
        source={{uri: course.thumbnails}}
        style={{
          width: x.WIDTH - 24,
          height: (x.WIDTH - 24) / 2.5,
          borderRadius: 12,
        }}
      />
      <View style={styles.viewCover}>
        <View>
          <Text style={styles.title}>{course.title}</Text>
          <View style={{height: 5}} />
          {Object.keys(course.message).map((it, i) => (
            <View key={i} style={{marginVertical: 4}}>
              <Text style={styles.message} numberOfLines={1}>
                {course.message[it]}
              </Text>
            </View>
          ))}
        </View>
        <View style={x.Styles.rowCenter('flex-end')}>
          <Button
            title={'阅读教材'}
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 12,
              borderRadius: 12,
              paddingVertical: 6,
            }}
            textStyle={{color: '#333', fontSize: x.scale(14)}}
            onPress={onPdfPreviewPress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderRadius: 32,
    position: 'relative',
    width: x.WIDTH - 24,
    height: (x.WIDTH - 24) / 2.5,
  },
  viewCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: x.scale(16),
    color: '#fff',
    fontWeight: '500',
  },
  message: {
    fontSize: x.scale(14),
    color: '#fff',
    fontWeight: '500',
  },
});

export default Cover;
