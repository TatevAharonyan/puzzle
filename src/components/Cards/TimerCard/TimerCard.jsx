import React from 'react';

import {Text} from '@/components';
import {Image, TouchableOpacity, View, ImageBackground} from 'react-native';

import {useStyles} from './useStyles';

export const TimerCard = ({time, color = 'default', textColor, id}) => {
  const {styles} = useStyles({color});

  return (
    <View style={styles.wrapper} key={id}>
      <View style={styles.circle}>
        <Text size={40} weight={900} color={textColor}>
          {time.slice(0, 1)}
        </Text>
      </View>
      <View style={styles.circle}>
        <Text size={40} weight={900} color={textColor}>
          {time.slice(1)}
        </Text>
      </View>
    </View>
  );
};
