import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './style';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
