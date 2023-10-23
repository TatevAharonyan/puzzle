import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const YandexIcon = () => {
  return (
    <Svg
      width={responsiveWidth(13)}
      height={responsiveWidth(20)}
      viewBox="0 0 13 20"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.585 20H13V0H8.051C3.072 0 .46 2.615.46 6.476c-.003 3.045 1.452 4.915 3.989 6.76L0 20h3.69l4.95-7.578-1.724-1.175C4.837 9.81 3.82 8.693 3.82 6.27c0-2.13 1.463-3.566 4.245-3.566h1.521V20z"
        fill="#fff"
      />
    </Svg>
  );
};
