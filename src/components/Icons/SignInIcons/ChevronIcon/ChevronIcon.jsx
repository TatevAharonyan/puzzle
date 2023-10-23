import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ChevronIcon = ({size = 24}) => {
  return (
    <Svg
      width={responsiveWidth(size)}
      height={responsiveWidth(size)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.707 5.293a1 1 0 010 1.414L9.414 12l5.293 5.293a1 1 0 11-1.414 1.414L6.586 12l6.707-6.707a1 1 0 011.414 0z"
        fill="#000"
      />
    </Svg>
  );
};
