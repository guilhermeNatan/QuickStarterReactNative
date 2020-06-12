import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../layout/Colors';
import styles from './style';

export default class MenuButton extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <Icon
        name="menu"
        color={colors.iconColors.destaque}
        size={20}
        style={styles.menuIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    );
  }
}
