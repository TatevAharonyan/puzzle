import React from 'react';

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
  ChevronIcon,
  LogoIcon,
  FilledField,
  ViewOffIcon,
  Button,
  VKIcon,
  YandexIcon,
} from '@/components';
import {pallete} from '@/themes';

export const SignInScreen = ({onLogin}) => {
  const {styles} = useStyles();

  const {
    login,
    onChangeLogin,
    errorLogin,
    password,
    onChangePassword,
    errorPassword,
    viewOff,
    setViewOff,
    errorInfo,
    onSubmit,
  } = useData({onLogin});

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <StatusBar hidden={false} backgroundColor={pallete.background.default} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <ChevronIcon />
          </View>
          <Text size={20} family="bold">
            Авторизация
          </Text>
          <View style={[styles.iconWrapper, styles.wrpp]} />
        </View>
        <View style={styles.logoWrapper}>
          <LogoIcon />
        </View>
        <Text align="center" margin={{top: 42, bottom: 20}} family="bold">
          Войти
        </Text>
        {/* login form */}
        <FilledField
          placeholder="Логин или телефон"
          value={login}
          onChangeText={v => {
            onChangeLogin(v);
          }}
        />
        <FilledField
          placeholder="Логин или телефон"
          secureTextEntry={viewOff}
          value={password}
          onChangeText={v => {
            onChangePassword(v);
          }}
          rightIcon={
            <TouchableOpacity onPress={() => setViewOff(!viewOff)}>
              <ViewOffIcon rotate={!viewOff} />
            </TouchableOpacity>
          }
        />

        <Text color={'danger'} margin={{top: -7}}>
          {errorInfo}
        </Text>
        <Button onPress={onSubmit} color="pink" margin={{bottom: 15}}>
          Войти
        </Button>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={styles.changePassword}>
          <Text color={'light_gray'} size={14} weight={500} family="regular">
            Не помню пароль
          </Text>
        </TouchableOpacity>

        {/* buttons socials */}
        <Button
          onPress={() => {}}
          color="blue"
          margin={{bottom: 10}}
          leftIcon={<VKIcon />}>
          Войти через Вконтакте
        </Button>
        <Button onPress={() => {}} color="orange" leftIcon={<YandexIcon />}>
          Войти через Войти через Яндекс
        </Button>

        {/* registration */}
        <Text
          align="center"
          weight={500}
          margin={{top: 37, bottom: 55}}
          family="regular">
          Регистрация
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
