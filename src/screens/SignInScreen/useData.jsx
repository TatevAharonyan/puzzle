import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_TOKEN} from '@/query/user';
import {useApolloClient} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useData = ({onChangeScreen}) => {
  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');

  const [errorInfo, setErrorInfo] = useState('');

  const [viewOff, setViewOff] = useState(true);

  const client = useApolloClient();

  const onChangeLogin = v => {
    setErrorInfo('');
    setLogin(v);
  };

  const onChangePassword = v => {
    setPassword(v);
    setErrorInfo('');
  };
  const onSubmit = async data => {
    if (password && login) {
      try {
        const result = await client.query({
          query: GET_TOKEN,
          variables: {
            login: login.toLowerCase(),
            password,
          },
        });
        switch (result.data.createTokens.__typename) {
          case 'ErrorWithFields':
            setErrorInfo('Данные были введены неверно.');
            break;
          case 'TokenPair':
            await AsyncStorage.setItem(
              'TOKEN',
              result.data.createTokens.accessToken,
            );
            setErrorInfo('');
            onChangeScreen('raffle');
            break;

          default:
            break;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorInfo('Обязательные поля не заполнили ');
    }
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
