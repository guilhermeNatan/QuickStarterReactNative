import React from 'react';
import {StyleSheet} from 'react-native';
import DeviceFeatures from '../../../../util/DeviceFeatures';
import {colors} from '../../../../layout/Colors';
import Fonts from '../../../../layout/Fonts';

const styles = StyleSheet.create({
  container: {
    padding: DeviceFeatures.widthScreen(3),
    backgroundColor: colors.topScreen,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: Fonts.medium,
    color: colors.secondaryColor,
    marginLeft: DeviceFeatures.widthScreen(30),
    textAlign: 'center',
  },
});

export default styles;
