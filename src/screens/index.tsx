import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import * as React from 'react';

import Main from './Main';
import LettersGame from './LettersGame';

export type RootStacksParams = {
  Main: undefined;
  LettersGame: undefined;
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  const navigator = useNavigationContainerRef();
  // useFlipper(navigator);
  return (
    <NavigationContainer ref={navigator}>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          animationDuration: 618,
        }}>
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen
          name="LettersGame"
          component={LettersGame}
          options={{freezeOnBlur: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
