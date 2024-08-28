import x from '@src/constants/x';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface MyProps {
  children: React.ReactNode;
  title: string;
}

const Setting: React.FC<MyProps> = props => {
  const [tab, setTab] = useState(0);
  const {children, title} = props;

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 6,
  },
  text: {
    fontSize: x.scale(16),
    fontWeight: '500',
    color: '#333',
  },
});

export default Setting;
