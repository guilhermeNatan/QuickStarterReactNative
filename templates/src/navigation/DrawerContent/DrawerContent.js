import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import appConfig from '../../../app';
import screens from '../ScreenNames';
const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>{`${appConfig.displayName}`}</Text>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate(screens.HOME.id);
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="settings" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {
              props.navigation.navigate(screens.SETTINGS.id);
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          tyle={styles.bottomDrawerSection}
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label={'Sign Out'}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

DrawerContent.propTypes = {};

export default DrawerContent;
