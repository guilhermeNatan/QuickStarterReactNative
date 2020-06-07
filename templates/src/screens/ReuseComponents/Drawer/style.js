import {StyleSheet} from 'react-native';
import DeviceFeatures from '../../../util/DeviceFeatures';
import {colors} from '../../../layout/Colors';
import Fonts from '../../../layout/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryLightColor,
  },
  link: {
    flex: 1,
    fontSize: Fonts.medium,
    // padding: 6,
    // paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    color: colors.white,
  },
  topLinks: {
    height: 160,
  },
  bottomLinks: {
    flex: 1,
    // backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 100,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    // backgroundColor: colors.white,
  },
  imgView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: DeviceFeatures.widthScreen(3),
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nomeEmpresa: {
    fontSize: 20,
    paddingBottom: 5,
    color: 'white',
    textAlign: 'left',
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: colors.white,
  },
});

export default styles;
