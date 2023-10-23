import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowIcon = () => {
  return (
    <Svg
      width={responsiveWidth(24)}
      height={responsiveWidth(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M7 12h14"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.285 11.797l5.45-3.893A.8.8 0 019 8.554v6.891a.8.8 0 01-1.265.651l-5.45-3.893a.25.25 0 010-.406z"
        fill="#fff"
      />
    </Svg>
  );
};
