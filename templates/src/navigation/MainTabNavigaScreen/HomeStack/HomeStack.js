import screens from '../../ScreenNames';
import HomeScreen from '../../../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name={screens.HOME.id}
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
