import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {pallete, fonts} from '@/themes';

export const useStyles = ({color, family}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontFamily: fonts[family],
          color: pallete.text[color],
        },
      }),
    [pallete, color],
  );

  return {styles};
};
