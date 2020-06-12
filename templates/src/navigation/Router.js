/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './DrawerNavigator';

const Router = () => (
  <NavigationContainer>
    <DrawerNav />
  </NavigationContainer>
);
export default Router;
