import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {responsiveWidth} from '@/helpers';
import {pallete} from '@/themes';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          width: '100%',
          flexDirection: 'row',
          paddingVertical: responsiveWidth(15),
          borderBottomColor: pallete.background.purple,
          borderBottomWidth: responsiveWidth(0.2),
        },
        wrapperWeek: {
          width: '40%',
        },
        wrapperInfo: {
          width: '60%',
        },
      }),
    [pallete],
  );

  return {styles};
};
