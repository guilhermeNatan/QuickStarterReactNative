import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../../../../layout/Colors';
import styles from './style';

export default class MenuButton extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <Icon
        name="menuunfold"
        color={colors.iconColors.destaque}
        size={20}
        style={styles.menuIcon}
        type={'antdesign'}
        onPress={() => navigation.toggleDrawer()}
      />
    );
  }
}
