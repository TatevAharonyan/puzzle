import React, {useMemo} from 'react';

import {Text} from '@/components';
import {View} from 'react-native';

import {useStyles} from './useStyles';

export const WorkingHoursCard = ({week, info}) => {
  const {styles} = useStyles();

  const {key, name} = week;

  const infoBlok = useMemo(() => {
    switch (info[key].status) {
      case 'DAY_OFF':
        return (
          <Text color="white" size={12}>
            Нерабочий день
          </Text>
        );
      case 'WORKING':
        return (
          <Text color="white" size={12}>
            Рабочие часы: {info[key].hours.opensAt.slice(0, 5)} -{' '}
            {info[key].hours.closesAt.slice(0, 5)}
          </Text>
        );

      default:
        break;
    }
  }, [info[key]]);

  return (
    <View style={styles.wrapper} key={`Key+ ${key}`}>
      <View style={styles.wrapperWeek}>
        <Text size={16} color="white" family="bold">
          {name}
        </Text>
      </View>

      <View style={styles.wrapperInfo}>
        <Text size={14} color="white">
          {infoBlok}
        </Text>
      </View>
    </View>
  );
};
