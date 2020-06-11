/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import DrawerNavigator from './DrawerNavigator';
import {INITAL_ROUTER} from './ScreenNames';

const stackNavigator = createStackNavigator(
  {
    [INITAL_ROUTER]: {
      screen: DrawerNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.DefaultTransition,
    },
  },
);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
