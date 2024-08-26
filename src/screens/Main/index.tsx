import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {Image} from 'react-native';
import Home from '../Home';
import MarketScreen from '../Courses';
import {useStore} from '@src/stores';
import OrdersScreen from '../Orders';
import MyScreen from '../My';
import Courses from '../Courses';

const Tab = createBottomTabNavigator();

function MainScreen() {
  const screens = [
    {
      name: 'Home',
      component: Home,
      icon: require('./assets/menu_home.png'),
      label: '首页',
    },
    {
      name: 'Courses',
      component: Courses,
      icon: require('./assets/menu_course.png'),
      label: '课程',
    },
    {
      name: 'Order',
      component: OrdersScreen,
      icon: require('./assets/menu_order.png'),
      label: '订单',
    },
    {
      name: 'Friends',
      component: Home,
      icon: require('./assets/menu_friends.png'),
      label: '社区',
    },
    {
      name: 'Me',
      component: MyScreen,
      icon: require('./assets/menu_me.png'),
      label: '我的',
    },
  ];
  const {theme} = useStore();
  return (
    <Tab.Navigator>
      {screens.map((it, i) => (
        <Tab.Screen
          {...it}
          key={i}
          options={{
            headerShown: false,
            tabBarLabel: it.label,
            tabBarActiveTintColor: theme,
            tabBarIcon: ({color}) => (
              <Image
                source={it.icon}
                style={{height: 24, width: 24, tintColor: color}}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MainScreen;
