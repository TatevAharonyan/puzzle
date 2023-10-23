import {useMemo} from 'react';
import {StatusBar, StyleSheet, useWindowDimensions} from 'react-native';
import {pallete} from '@/themes';
import {responsiveWidth, screenWidth} from '@/helpers';

export const useStyles = () => {
  const {width} = useWindowDimensions();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
          backgroundColor: pallete.background.default,
          paddingHorizontal: responsiveWidth(16),
        },
        header: {
          paddingVertical: responsiveWidth(16),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        iconWrapper: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: responsiveWidth(10),
        },
        wrpp: {
          width: responsiveWidth(24),
        },
        logoWrapper: {
          alignItems: 'center',
          marginTop: responsiveWidth(5),
        },
        changePassword: {
          width: '100%',
          alignItems: 'center',
          marginBottom: screenWidth * responsiveWidth(0.26),
        },
      }),
    [pallete],
  );

  return {styles};
};
