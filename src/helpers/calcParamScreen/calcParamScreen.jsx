import {Dimensions} from 'react-native';

const heightMobileUI = 640;
const widthMobileUI = 360;

export const responsiveWidth = width => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;
