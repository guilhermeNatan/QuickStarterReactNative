import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import ServiceUtil from '../../../services/ServiceUtil';
import * as screenNames from '../../../navigation/ScreenNames';
import Logo from '../Logo/Logo';
import Fonts from '../../../layout/Fonts';
import {Icon} from 'react-native-elements';
import {colors} from '../../../layout/Colors';

class MenuDrawer extends Component {
  renderMenu = () => {
    const {menuLinks, navigation} = this.props;
    return menuLinks.map((menu, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            height: 50,
            flexDirection: 'row',
            marginLeft: 16,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate(menu.nav)}>
          <Icon
            name={menu.icon}
            color={colors.iconColors.white}
            type={'entypo'}
            size={Fonts.regular}
          />
          <Text style={styles.link}> {menu.descricao} </Text>
        </TouchableOpacity>
      );
    });
  };

  sair = () => {
    const {navigation} = this.props;
    ServiceUtil.logout().then(() => {
      navigation.navigate(screenNames.LOGIN);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topLinks}>
            <View style={styles.profile}>
              <View style={styles.imgView}>
                <Logo size={Fonts.drawerTitle} />
              </View>
            </View>
          </View>
          <View style={styles.bottomLinks}>{this.renderMenu()}</View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={this.sair}>
              <Text style={{...styles.link, marginLeft: 50}}>Sair</Text>
            </TouchableOpacity>
            {/*<Text style={styles.version}>v1.0</Text>*/}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(null, {})(MenuDrawer);
