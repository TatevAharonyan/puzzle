import {useMemo} from 'react';
import {StatusBar, StyleSheet, useWindowDimensions} from 'react-native';
import {pallete} from '@/themes';
import {responsiveWidth, screenWidth, screenHeight} from '@/helpers';

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
        backgWrapper: {
          width: screenWidth,
          height: screenHeight * 2,
          backgroundColor: pallete.background.purple,
          position: 'absolute',
          transform: [{rotate: '209deg'}],
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
        },
        infoWrapper: {
          width: '100%',
          alignItems: 'center',
          marginVertical: responsiveWidth(23),
        },
        infoIconWrapper: {
          position: 'absolute',
          right: 0,
          top: -2,

          width: '20%',
          paddinnBottom: responsiveWidth(2),
        },
        timeWrapper: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: responsiveWidth(5),
        },
        productWrapper: {
          marginLeft: responsiveWidth(-2),
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: screenWidth * responsiveWidth(0.3),
          marginTop: responsiveWidth(4),
        },
      }),
    [pallete],
  );

  return {styles};
};
