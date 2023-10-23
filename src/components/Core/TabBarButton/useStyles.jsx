import {responsiveWidth} from '@/helpers';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {pallete} from '@/themes';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          paddingVertical: responsiveWidth(12),
          flex: 1,
          marginHorizontal: responsiveWidth(12),
          paddingHorizontal: responsiveWidth(4),
        },
      }),
    [pallete],
  );

  return {styles};
};
