import React from 'react';

import {SafeAreaView, View, ActivityIndicator} from 'react-native';

import {useStyles} from './useStyles';
import {pallete} from '@/themes';

export const LoadingScreen = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator size="large" color={pallete.background.pink} />
    </SafeAreaView>
  );
};
