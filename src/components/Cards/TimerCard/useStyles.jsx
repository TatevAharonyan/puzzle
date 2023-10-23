import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {responsiveWidth, screenWidth} from '@/helpers';
import {pallete} from '@/themes';

export const useStyles = ({color}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },

        circle: {
          width: screenWidth * responsiveWidth(0.18),
          height: responsiveWidth(99),
          backgroundColor: pallete.background[color],
          borderRadius: responsiveWidth(80),

          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: responsiveWidth(2),
        },
      }),
    [pallete, color],
  );

  return {styles};
};
