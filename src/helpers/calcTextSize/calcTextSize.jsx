import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const normalize = size => {
  const scale = SCREEN_WIDTH / (SCREEN_WIDTH > 360 ? 340 : 320);

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    let iosNum;
    if (size < 12) {
      iosNum = 0.5;
    } else {
      iosNum = 1;
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - iosNum;
  } else {
    let androidNum;
    if (SCREEN_WIDTH * 2 > 720 && size < 13) {
      androidNum = 1;
    } else {
      androidNum = 2;
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - androidNum;
  }
};
