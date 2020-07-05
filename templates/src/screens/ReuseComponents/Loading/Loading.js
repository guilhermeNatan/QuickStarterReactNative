import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {colors} from '../../../layout/Colors';

class Loading extends Component {
  render() {
    const {
      application: {loading},
      renderContent,
    } = this.props;

    return loading ? (
      <ActivityIndicator
        style={styles.container}
        color={colors.secondaryDarkColor}
      />
    ) : (
      renderContent()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  application: state.application,
});
export default connect(mapStateToProps, null)(Loading);
