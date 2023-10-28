import React, {useContext} from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';

import {useStyles} from './useStyles';
import {useData} from './useData';
import {
  Text,
  ArrowIcon,
  LogoBigIcon,
  WorkingHoursCard,
  Button,
} from '@/components';
import {pallete, fonts} from '@/themes';
import {DAY_OF_WEEK} from '@/constant';

import {Context} from '@/context';

export const ProfileScreen = () => {
  const {styles} = useStyles();

  // Getting the Logout function using context.
  const {handleLogout} = useContext(Context);

  const {userInfo, dateOfBirth, correctData, isLoading} = useData();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <StatusBar
          hidden={false}
          backgroundColor={pallete.background.mangosteen}
        />

        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <ArrowIcon />
          </View>
          <Text size={16} weight={700} color="white">
            Данные пользователя
          </Text>
          <View style={[styles.iconWrapper, styles.wrpp]} />
        </View>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={pallete.background.pink} />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        hidden={false}
        backgroundColor={pallete.background.mangosteen}
      />

      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <ArrowIcon />
        </View>
        <Text size={16} weight={700} color="white">
          Данные пользователя
        </Text>
        <View style={[styles.iconWrapper, styles.wrpp]} />
      </View>
      {/* User personal data */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.imagesWrapper}>
            {userInfo?.avatar?.path && (
              <Image
                style={styles.img}
                source={{
                  uri: userInfo?.avatar?.path,
                }}
              />
            )}
            <Text size={10} color="white" margin={{top: 8}}>
              подписчики : {userInfo?.subscribersCount}
            </Text>
          </View>

          <View style={styles.headerTitleWrapper}>
            <View style={styles.infoWrapper}>
              <View style={styles.infoWrapperColumn}>
                <Text size={14} color="white" family="bold">
                  {userInfo?.login}
                </Text>

                <Text size={13} color="white">
                  Имя: {userInfo?.name}
                </Text>
                <Text size={11} color="white">
                  Работа: {userInfo?.shortDescription}
                </Text>
                <Text size={11} color="white">
                  Пол: {userInfo?.sex}
                </Text>
                <Text size={11} color="white">
                  Дата рождения: {dateOfBirth}
                </Text>
                <Text size={11} color="white">
                  Эл. почта: {userInfo?.email}
                </Text>
                <Text size={11} color="white">
                  Web: {userInfo?.website}
                </Text>
                <Text size={11} color="white">
                  Телефон: {userInfo?.phone}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.infoWrapperColumn}>
          <Text size={14} color="white" margin={{top: 22}}>
            ` {userInfo?.description} `
          </Text>
        </View>
        <Text size={15} color="white" margin={{top: 20}}>
          График рабочих дней
        </Text>
        {/* Working hours by day of the week. */}
        {userInfo?.workingHours &&
          DAY_OF_WEEK.map(i => (
            <WorkingHoursCard
              week={i}
              info={userInfo?.workingHours}
              key={i.key}
            />
          ))}

        <Text size={12} color={'white'} family="bold" margin={{top: 14}}>
          Дополнительная информация:
        </Text>
        <Text size={11} color={'white'} margin={{top: 2}}>
          {userInfo?.additionalInfo?.advantage}
        </Text>
        <Text size={10} color="white" family="bold" margin={{top: 14}}>
          Количество просмотров:
          <Text size={10} color={'white'} family="light">
            {' '}
            {userInfo?.viewsCount}
          </Text>
        </Text>
        <Text size={10} color="white" family="bold" margin={{top: 14}}>
          С нами с
          <Text size={10} color={'white'} family="light">
            {' '}
            {correctData(userInfo?.createdAt)}г.
          </Text>
        </Text>
        {/* Logout */}
        <Button
          onPress={handleLogout}
          color="pink"
          margin={{top: 20, bottom: 30}}>
          Выйти из аккаунта
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
