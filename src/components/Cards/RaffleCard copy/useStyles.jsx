import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {responsiveWidth, screenWidth} from '@/helpers';
import {pallete} from '@/themes';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          alignItems: 'center',
          justifyContent: 'center',
          width: (screenWidth - responsiveWidth(65)) / 3,

          marginRight: responsiveWidth(12),
        },
        imgWrapper: {
          width: (screenWidth - responsiveWidth(4 * 23 - 2)) / 3,
          height: (screenWidth - responsiveWidth(4 * 23 - 2)) / 3,
          borderRadius: responsiveWidth(10),
          backgroundColor: pallete.background.default,
          alignItems: 'center',
          justifyContent: 'center',
        },
        image: {
          width: responsiveWidth(64),
          height: responsiveWidth(64),
          borderRadius: responsiveWidth(10),
        },
        circle: {
          minWidth: responsiveWidth(24),
          height: responsiveWidth(24),
          backgroundColor: pallete.background.pink,
          borderRadius: responsiveWidth(12),
          position: 'absolute',
          right: responsiveWidth(-12),
          top: responsiveWidth(-12),
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
