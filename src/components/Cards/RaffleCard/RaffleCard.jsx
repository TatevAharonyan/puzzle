import React from 'react';

import {Text} from '@/components';
import {Image, TouchableOpacity, View} from 'react-native';

import {useStyles} from './useStyles';

export const RaffleCard = ({product}) => {
  const {styles} = useStyles();
  return (
    <View style={styles.wrapper} key={`key+ ${product.id}`}>
      <View style={styles.imgWrapper}>
        <Image style={styles.image} source={product.src} />
        <View style={styles.circle}>
          <Text size={14} weight={600} color="white">
            {product.quantity}
          </Text>
        </View>
      </View>
      <Text size={14} weight={600} color="white" margin={{top: 5}}>
        {product.name}
      </Text>
    </View>
  );
};
