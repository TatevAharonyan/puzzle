import {responsiveWidth} from '@/helpers';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {pallete} from '@/themes';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
