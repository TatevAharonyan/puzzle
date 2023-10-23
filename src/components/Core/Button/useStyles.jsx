import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {responsiveWidth} from '@/helpers';
import {pallete} from '@/themes';

export const useStyles = ({color}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.button[color],
          width: '100%',
          aspectRatio: 1 / 0.135,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: responsiveWidth(16),
          borderRadius: responsiveWidth(20),
        },
        icon: {
          marginRight: responsiveWidth(10),
        },
      }),
    [pallete, color],
  );

  return {styles};
};
