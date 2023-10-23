import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path, G, Ellipse} from 'react-native-svg';

export const UserIcon = () => {
  return (
    <Svg
      width={responsiveWidth(32)}
      height={responsiveWidth(32)}
      viewBox="0 0 32 32"
      fill="none">
      <G fill="#222">
        <Path d="M26.48 25.816c.59-.123.94-.739.666-1.275-.797-1.553-2.12-2.919-3.84-3.946-2.097-1.25-4.664-1.928-7.306-1.928-2.642 0-5.21.678-7.305 1.928-1.72 1.027-3.044 2.393-3.84 3.946-.276.536.075 1.152.665 1.275l2.32.483a40 40 0 0016.32 0l2.32-.483z" />
        <Ellipse cx={16} cy={10.6667} rx={6.66667} ry={6.66667} />
      </G>
    </Svg>
  );
};
