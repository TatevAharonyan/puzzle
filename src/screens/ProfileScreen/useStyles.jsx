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
          width: '100%',
        },
        imagesWrapper: {
          height: responsiveWidth(100),
          width: responsiveWidth(100),
          borderRadius: responsiveWidth(50),
          borderColor: pallete.background.default,
          borderWidth: responsiveWidth(1),
          marginRight: responsiveWidth(10),
        },
        img: {
          height: responsiveWidth(98),
          width: responsiveWidth(98),
          borderRadius: responsiveWidth(50),
        },
        headerTitleWrapper: {},

        infoWrapper: {
          flexDirection: 'row',

          borderBottomWidth: responsiveWidth(0.2),
          borderBottomColor: pallete.background.default,
          paddingVertical: responsiveWidth(5),
        },
        infoWrapperColumn: {
          width: '100%',
        },
        loading: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
