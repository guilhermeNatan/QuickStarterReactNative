import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import styles from './style';

class Logo extends PureComponent {
  render() {
    const {size} = this.props;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: size, ...styles.text}}>{'Virtual'}</Text>
        <Text style={{fontSize: size, ...styles.text}}>{'Mart'}</Text>
      </View>
    );
  }
}

Logo.propTypes = {
  size: PropTypes.number,
};

export default Logo;
