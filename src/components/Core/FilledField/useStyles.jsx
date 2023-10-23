import {pallete, fonts} from '@/themes';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {responsiveWidth} from '@/helpers';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          marginBottom: responsiveWidth(10),
        },
        content: {
          backgroundColor: pallete.input.background,

          borderRadius: responsiveWidth(8),
          aspectRatio: 1 / 0.125,
          flexDirection: 'row',

          justifyContent: 'space-between',
          alignItems: 'center',

          paddingLeft: responsiveWidth(9),
          paddingRight: responsiveWidth(13),
        },
        inputWrapper: {
          flex: 1,
        },
        input: {
          color: pallete.input.text,
          fontFamily: fonts.regular,

          textAlign: 'left',
        },
        icon: {},
      }),
    [pallete],
  );

  return {styles};
};
