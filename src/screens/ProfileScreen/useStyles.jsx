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
          backgroundColor: pallete.background.mangosteen,
          paddingHorizontal: responsiveWidth(16),
        },
        header: {
          paddingTop: responsiveWidth(16),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(9),
        },
        iconWrapper: {
          justifyContent: 'center',
          alignItems: 'center',
          paddinnBottom: responsiveWidth(10),
        },
        wrpp: {
          width: responsiveWidth(24),
        },
        logoWrapper: {
          alignItems: 'center',
          marginTop: responsiveWidth(15),
          marginBottom: responsiveWidth(20),
        },
        infoWrapper: {
          flexDirection: 'row',
          borderBottomWidth: responsiveWidth(0.2),
          borderBottomColor: pallete.background.default,
          paddingVertical: responsiveWidth(5),
        },
      }),
    [pallete],
  );

  return {styles};
};
