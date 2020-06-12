/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from '../screens/Settings';

import DrawerContent from './DrawerContent/DrawerContent';
import screens from './ScreenNames';
import MainTabScreen from './MainTabNavigaScreen/MainTabScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => (
  <Drawer.Navigator
    initialRouteName="HomeDrawer"
    drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name={'HomeDrawer'} component={MainTabScreen} />
    <Drawer.Screen name={screens.SETTINGS.id} component={Settings} />
  </Drawer.Navigator>
);

export default DrawerNav;
