import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

export const InfoIcon = () => {
  return (
    <Svg
      width={responsiveWidth(24)}
      height={responsiveWidth(24)}
      viewBox="0 0 24 24"
      fill="none">
      <G stroke="#fff">
        <Circle cx={12} cy={12} r={9} strokeWidth={2} />
        <Circle cx={12} cy={18} r={0.5} fill="#fff" />
        <Path
          d="M12 16v-1.419c0-.944.604-1.782 1.5-2.081v0a2.194 2.194 0 001.5-2.081v-.513C15 8.3 13.7 7 12.094 7H12a3 3 0 00-3 3v0"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
};
