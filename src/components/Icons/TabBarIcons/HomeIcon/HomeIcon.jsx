import {responsiveWidth} from '@/helpers';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = () => {
  return (
    <Svg
      width={responsiveWidth(32)}
      height={responsiveWidth(32)}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.033 13.502c-.366.795-.366 1.7-.366 3.51v5.655c0 2.514 0 3.77.78 4.552.746.746 1.926.78 4.22.78v-6.666A2.333 2.333 0 0114 19h4a2.333 2.333 0 012.333 2.333V28c2.294-.002 3.474-.035 4.22-.781.78-.781.78-2.038.78-4.552v-5.654c0-1.81 0-2.716-.366-3.511-.366-.796-1.053-1.385-2.427-2.563l-1.334-1.143C18.722 7.666 17.48 6.602 16 6.602c-1.48 0-2.722 1.064-5.206 3.194L9.46 10.939c-1.374 1.178-2.061 1.767-2.427 2.563zM18.333 28v-6.667A.333.333 0 0018 21h-4a.333.333 0 00-.333.333V28h4.666z"
        fill="#222"
      />
    </Svg>
  );
};
