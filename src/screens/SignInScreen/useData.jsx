import {useState, useEffect} from 'react';

import {useQuery} from '@apollo/client';

import {GET_TOKEN} from '@/query/user';

export const useData = ({onChangeScreen}) => {
  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');

  const [errorInfo, setErrorInfo] = useState('');

  const [viewOff, setViewOff] = useState(true);

  // const {data, loading, error} = useQuery(GET_TOKEN () );

  // console.log('data', data);
  // console.log('loading', loading);
  // console.log('error', error);

  useEffect(() => {}, []);

  const onChangeLogin = v => {
    setErrorInfo('');

    setLogin(v);
  };

  const onChangePassword = v => {
    setPassword(v);
    setErrorInfo('');
  };
  const onSubmit = data => {
    password && login
      ? onChangeScreen('raffle')
      : setErrorInfo('Обязательные поля не заполнили ');
  };

  return {
    onSubmit,
    login,
    onChangeLogin,
    password,
    onChangePassword,
    errorInfo,
    viewOff,
    setViewOff,
  };
};
