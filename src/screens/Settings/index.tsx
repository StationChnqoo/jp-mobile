import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

import MarketItem from '@src/components/MarketItem';
import SafeArea from '@src/components/SafeArea';
import ToolBar from '@src/components/ToolBar';
import {RootStacksProp} from '..';
import Font from './components/Font';

interface MyProps {
  navigation?: RootStacksProp;
}

const Settings: React.FC<MyProps> = props => {
  const [tab, setTab] = useState(0);
  const {navigation} = props;

  return (
    <SafeArea isAvoidBottomSpace={true}>
      <ToolBar
        title={'设置'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={{flex: 1}}>
          <Font />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Settings;
