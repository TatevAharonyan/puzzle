import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const ViewOffIcon = ({rotate = false}) => {
  return (
    <Svg
      width={responsiveWidth(22)}
      height={responsiveWidth(10)}
      viewBox="0 0 22 10"
      fill="none"
      style={{transform: [{rotate: rotate ? '-180deg' : '0deg'}]}}>
      <G stroke="#D9D9D9" strokeWidth={1.5} strokeLinecap="round">
        <Path d="M21 1s-4 6-10 6S1 1 1 1" />
        <Path
          d="M14 6.5L15.5 9M19 4l2 2M1 6l2-2M8 6.5L6.5 9"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
