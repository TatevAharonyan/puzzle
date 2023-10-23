import React from 'react';

import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';

import {useStyles} from './useStyles';
import {useData} from './useData';
import {Text, ArrowIcon, LogoBigIcon} from '@/components';
import {pallete} from '@/themes';

export const ProfileScreen = ({navigation}) => {
  const {styles} = useStyles();

  const {} = useData();
  const user = {name: 'Name'};

  return (
    <SafeAreaView style={styles.wrapper}>
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
            Данные пользователя
          </Text>
          <View style={[styles.iconWrapper, styles.wrpp]} />
        </View>
        <View style={styles.logoWrapper}>
          <LogoBigIcon />
        </View>

        {user && (
          <View style={styles.infoWrapper}>
            <Text size={16} color="white" family="bold" style={{width: '40%'}}>
              Name
            </Text>
            <Text size={16} color="white" style={{width: '60%'}}>
              TestName
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
