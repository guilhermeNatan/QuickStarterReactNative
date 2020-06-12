import DeviceFeatures from '../../util/DeviceFeatures';
import {colors} from '../../layout/Colors';
import Fonts from '../../layout/Fonts';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.secondaryLightColor,
  },
  header: {
    height: DeviceFeatures.heigthScreen(20),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textHeader: {
    fontSize: Fonts.big,
    color: colors.secondaryDarkColor,
    flex: 1,
    marginLeft: DeviceFeatures.widthScreen(3),
    textAlignVertical: 'center',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },

  drawerSection: {
    marginTop: 15,
  },
};
