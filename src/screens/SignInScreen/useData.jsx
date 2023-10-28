import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_TOKEN} from '@/query/user';
import {useApolloClient} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useData = ({onLogin}) => {
  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');

  const [errorInfo, setErrorInfo] = useState('');

  const [viewOff, setViewOff] = useState(true);

  const client = useApolloClient();

  // Updating login data.
  const onChangeLogin = v => {
    setErrorInfo('');
    setLogin(v);
  };

  // Updating password data.
  const onChangePassword = v => {
    setPassword(v);
    setErrorInfo('');
  };

  // Checking login details for the application.
  const onSubmit = async data => {
    // Checking whether there is information.
    if (password && login) {
      try {
        // Sending a request to the server.
        const result = await client.query({
          query: GET_TOKEN,
          variables: {
            login: login.toLowerCase(),
            password,
          },
        });
        // Check response status.
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
            onLogin();
            break;
          default:
            setErrorInfo('Данные были введены неверно.');
            break;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // If form data is empty.
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
