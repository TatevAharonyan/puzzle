import React, {useMemo} from 'react';

import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import {useStyles} from './useStyles';
import {useData} from './useData';
import {
  Text,
  ArrowIcon,
  LogoBigIcon,
  InfoIcon,
  Button,
  TimerCard,
  RaffleCard,
} from '@/components';
import {pallete} from '@/themes';

export const RaffleScreen = ({navigation}) => {
  const {styles} = useStyles();

  const {onSubmit, time, product} = useData();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.backgWrapper} />
      <StatusBar
        hidden={false}
        backgroundColor={pallete.background.mangosteen}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <ArrowIcon />
          </View>
          <Text size={16} weight={700} color="white">
            Розыгрыш
          </Text>
          <View style={[styles.iconWrapper, styles.wrpp]} />
        </View>
        <View style={styles.logoWrapper}>
          <LogoBigIcon />
        </View>
        <View style={styles.infoWrapper}>
          <Text align="center" weight={600} size={14} color="white">
            До начала розыгрыша
          </Text>
          <View style={styles.infoIconWrapper}>
            <InfoIcon />
          </View>
        </View>
        <View style={styles.timeWrapper}>
          <TimerCard
            time={time > 59 ? '01' : '00'}
            textColor="black"
            id={`key + minutes`}
          />
          <Text
            align="center"
            weight={900}
            size={40}
            margin={{left: 4, right: 4}}>
            :
          </Text>

          <TimerCard
            time={
              time > 59 ? `0${time - 60}` : time > 10 ? `${time}` : `0${time}`
            }
            textColor="white"
            color="pink"
            id={`key + seconds`}
          />
        </View>
        <View style={styles.infoWrapper}>
          <Text align="center" weight={600} size={14} color="white">
            Разыгрываем сегодня
          </Text>
          <View style={styles.infoIconWrapper}>
            <InfoIcon />
          </View>
        </View>
        <View style={styles.productWrapper}>
          {product.map(i =>
            useMemo(() => {
              return <RaffleCard product={i} key={`key+ ${i.id}`} />;
            }, [i]),
          )}
        </View>
        <Button
          onPress={() => navigation.navigate('profile')}
          color="pink"
          margin={{bottom: 35}}>
          Участвовать
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
