import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LableIcon = () => {
  return (
    <Svg
      width={responsiveWidth(32)}
      height={responsiveWidth(32)}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.707 4.293C23.414 4 22.943 4 22 4H10c-.943 0-1.414 0-1.707.293C8 4.586 8 5.057 8 6v14.526c0 1.048 0 1.572.237 2.014.236.442.672.733 1.544 1.314l4 2.667c1.076.717 1.613 1.075 2.219 1.075.606 0 1.143-.358 2.219-1.075l4-2.667c.872-.581 1.308-.872 1.544-1.314.237-.442.237-.966.237-2.014V6c0-.943 0-1.414-.293-1.707zM13.333 20a2.667 2.667 0 105.334 0 2.667 2.667 0 00-5.334 0z"
        fill="#222"
      />
    </Svg>
  );
};
