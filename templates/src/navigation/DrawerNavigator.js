/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import * as screenNames from './ScreenNames';
import DeviceFeatures from '../util/DeviceFeatures';
import MenuDrawer from '../screens/ReuseComponents/Drawer/MenuDrawer';
import HomeScreen from '../screens/Home';

const DrawerConfig = {
  drawerWidth: DeviceFeatures.widthScreen(83),
  contentComponent: ({navigation}) => {
    return (
      <MenuDrawer
        navigation={navigation}
        menuLinks={[
          {
            nav: screenNames.HOME_STACK,
            descricao: 'Home',
            icon: 'home',
          },
          {
            nav: screenNames.ORDER_STACK,
            descricao: 'Meus pedidos',
            icon: 'shopping-bag',
          },
          {
            nav: screenNames.ADDRESS_STACK,
            descricao: 'Endereços',
            icon: 'location-pin',
          },
        ]}
      />
    );
  },
};

const homeStack = createStackNavigator({
  [screenNames.HOME]: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    [screenNames.HOME_STACK]: {
      screen: homeStack,
    },
  },
  DrawerConfig,
);

export default createAppContainer(DrawerNavigator);
