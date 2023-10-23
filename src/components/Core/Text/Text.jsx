import React, {useMemo} from 'react';
import {
  Text as TextNative,
  TextProps,
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';
import {useStyles} from './useStyles';
import {responsiveWidth, normalize} from '@/helpers';

export const Text = ({
  children,
  color = 'black',
  size = 16,
  family = 'light',
  margin,
  align = 'left',
  weight = 400,
  style = {},
  ...props
}) => {
  const {styles} = useStyles({color, family});

  const margins = useMemo(
    () => ({
      marginTop: responsiveWidth(margin?.top || 0),
      marginLeft: responsiveWidth(margin?.left || 0),
      marginRight: responsiveWidth(margin?.right || 0),
      marginBottom: responsiveWidth(margin?.bottom || 0),
    }),
    [margin],
  );

  return (
    <TextNative
      style={[
        styles.text,
        margins,
        style,
        {
          fontSize: normalize(size),

          textAlign: align,
          fontWeight: weight,
        },
      ]}
      allowFontScaling={true}
      {...props}>
      {children}
    </TextNative>
  );
};
