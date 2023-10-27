import React, {useState, useEffect} from 'react';

import {useQuery} from '@apollo/client';

import {GET_ME} from '@/query/user';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useApolloClient} from '@apollo/client';

export const useData = ({onChangeScreen}) => {
  const client = useApolloClient();

  const [userInfo, setUserInfo] = useState([]);

  const [dateOfBirth, setDateOfBirth] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('TOKEN').then(token => {
      info(token);
    });
  }, []);

  const info = async token => {
    const result = await client.query({
      query: GET_ME,
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    setUserInfo(result.data.getMe);
  };

  useEffect(() => {
    if (!!userInfo?.dateOfBirth) {
      setDateOfBirth(correctData(userInfo?.dateOfBirth));
    }
  }, [userInfo]);

  const correctData = date => {
    const d = new Date(userInfo?.dateOfBirth);

    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  };

  const onLogOut = async () => {
    try {
      await AsyncStorage.removeItem('TOKEN');
      onChangeScreen('signIn');
    } catch (exception) {
      console.log(exception);
    }
    // }
  };

  return {userInfo, dateOfBirth, onLogOut, correctData};
};
