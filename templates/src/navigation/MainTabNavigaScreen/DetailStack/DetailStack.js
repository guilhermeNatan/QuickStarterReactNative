import {createStackNavigator} from '@react-navigation/stack';
import screens from '../../ScreenNames';
import HomeScreen from '../../../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const DetailStack = createStackNavigator();

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name={screens.DETAIL.id}
      component={HomeScreen}
      options={{
        title: screens.DETAIL.name,
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);

export default DetailStackScreen;
