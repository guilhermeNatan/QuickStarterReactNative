/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { translate } from '../../locales'; 

class HomeScreen extends Component {
  render() {
    return (
      <View>
         <Text>{translate('hello')}</Text>
      </View>
    );
  }
}



HomeScreen.propTypes = {};

export default HomeScreen;
