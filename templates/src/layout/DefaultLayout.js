/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */

import {colors} from './Colors';
import DeviceFeatures from '../util/DeviceFeatures';
import {StatusBar} from 'react-native';

export const decorationText = {
  color: colors.primaryDarkColor,
};

export default class DefaultLayout {
  static containerDefault = {
    flex: 1,
  };

  static screenContainer = {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  };
  static containerScreenWithHeader = {
    flex: 1,
    paddingBottom: DeviceFeatures.distanceFromBottom(),
  };

  static decorationText = {
    color: colors.primaryDarkColor,
  };

  static simpleText = {
    color: colors.secondaryLigthTextColor,
  };

  static primaryText = {
    color: colors.primaryTextColor,
  };

  static secundaryText = {
    color: colors.secondaryTextColor,
  };

  static screenHorizontalMargin = {
    marginLeft: 10,
    marginRight: 10,
  };

  static screenVerticalMargin = {
    marginTop: 10,
    marginBottom: 10,
  };
}
