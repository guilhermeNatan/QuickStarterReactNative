/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {fromLeft} from 'react-navigation-transitions';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerNavigator from './DrawerNavigator';
import {INITAL_ROUTER} from './ScreenNames';

const stackNavigator = createStackNavigator(
  {
    [INITAL_ROUTER]: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    transitionConfig: () => fromLeft(600),
  },
);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
