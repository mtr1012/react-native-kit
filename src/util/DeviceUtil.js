import { Platform, Dimensions } from 'react-native';

// See https://mydevice.io/devices/ for device dimensions
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XS_MAX_WIDTH = 414;
const XS_MAX_HEIGHT = 896;

const IP_6_WIDTH = 375;
const IP_6_HEIGHT = 667;

const IP_5_WIDTH = 320;
const IP_5_HEIGHT = 568;

export default {
  isIPhoneX: () => {
    const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

    return Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === XS_MAX_HEIGHT && D_WIDTH === XS_MAX_WIDTH));
  },
  isIPhone6: () => {
    const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

    return Platform.OS === 'ios' &&
      ((D_HEIGHT === IP_6_WIDTH && D_WIDTH === IP_6_WIDTH) ||
        (D_HEIGHT === IP_6_WIDTH && D_WIDTH === IP_6_WIDTH));
  },
  isIPhone5: () => {
    const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

    return Platform.OS === 'ios' &&
      ((D_HEIGHT === IP_5_HEIGHT && D_WIDTH === IP_5_WIDTH) ||
        (D_HEIGHT === IP_5_WIDTH && D_WIDTH === IP_5_HEIGHT));
  },

  isAndroid: () => {
    return Platform.OS === 'android'
  }
} 