/**
 * Como o aplicativo irá rodar em plataformas(Android e IOs) e dispositivos diferentes,
 * este arquivo tem por finalidade centralizar qualquer tratamento e/ou obter informações do
 * SO bem como características do dispositivo em que está rodando
 */

import {Dimensions, Platform} from 'react-native';

export default class DeviceFeatures {
  static isAndroid() {
    return Platform.OS === 'android';
  }

  static isIOs() {
    return Platform.OS === 'ios';
  }

  static getPlatformDescription() {
    if (this.isAndroid()) {
      return 'android';
    }
    return 'ios';
  }

  static widthScreen(percent = 100) {
    return (percent * Dimensions.get('window').width) / 100;
  }

  static heigthScreen(percent = 100) {
    return (percent * Dimensions.get('window').height) / 100;
  }

  static distanceFromTop() {
    return DeviceFeatures.heigthScreen(3);
  }

  static horizontalPadding() {
    return DeviceFeatures.heigthScreen(4);
  }
  static horizontalMargin() {
    return DeviceFeatures.heigthScreen(4);
  }
  static verticalPadding() {
    return DeviceFeatures.heigthScreen(4);
  }

  static distanceFromBottom() {
    return DeviceFeatures.heigthScreen(1);
  }
  static textSession() {
    return DeviceFeatures.heigthScreen(2);
  }
}
