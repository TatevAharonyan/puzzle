import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {pallete} from '@/themes';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
          backgroundColor: pallete.background.mangosteen,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [],
  );

  return {styles};
};
