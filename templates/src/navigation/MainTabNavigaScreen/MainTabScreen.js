import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import screens from '../ScreenNames';
import HomeStackScreen from './HomeStack/HomeStack';
import DetailStackScreen from './DetailStack/DetailStack';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = (props) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name={screens.HOME.id}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name={'Notificacoes'}
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="bell-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

MainTabScreen.propTypes = {};

export default MainTabScreen;
