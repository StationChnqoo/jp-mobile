import x from '@src/constants/x';
import {RootStacksProp} from '@src/screens';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {
  navigation?: RootStacksProp;
  title: String;
  onBackPress?: () => void;
}

const IMAGE_SIZE = 16;

const ToolBar: React.FC<MyProps> = props => {
  const {title, onBackPress} = props;
  return (
    <View style={x.Styles.CARD}>
      <View style={[styles.views]}>
        <TouchableOpacity
          activeOpacity={0.9}
          hitSlop={x.Touchable.hitlop(12)}
          onPress={() => {
            onBackPress?.();
          }}>
          <Image
            source={require('@root/assets/common/row_back.png')}
            style={{height: IMAGE_SIZE, width: IMAGE_SIZE, tintColor: '#666'}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: '#333', fontWeight: 'medium'}}>
          {title}
        </Text>
        <View style={{width: IMAGE_SIZE}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    height: 44,
    backgroundColor: '#fff',
  },
});

export default ToolBar;
