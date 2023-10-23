import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const VKIcon = () => {
  return (
    <Svg
      width={responsiveWidth(24)}
      height={responsiveWidth(16)}
      viewBox="0 0 24 16"
      fill="none">
      <Path
        d="M13.072 15.5C4.872 15.5.195 9.87 0 .5h4.107c.135 6.877 3.163 9.79 5.562 10.39V.5h3.868v5.93c2.368-.254 4.856-2.957 5.696-5.93H23.1c-.644 3.664-3.343 6.366-5.261 7.477 1.919.901 4.992 3.259 6.161 7.523h-4.258c-.914-2.853-3.192-5.06-6.205-5.36v5.36h-.465z"
        fill="#fff"
      />
    </Svg>
  );
};
