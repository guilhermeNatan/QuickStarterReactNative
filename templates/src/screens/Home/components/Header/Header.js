import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import MenuButton from '../../../ReuseComponents/Drawer/MenuButton/MenuButton';

const Header = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <MenuButton navigation={navigation} />
        <Text style={styles.logoText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
