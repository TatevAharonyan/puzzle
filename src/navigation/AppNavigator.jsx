import React, {useEffect, useState, useCallback} from 'react';

import {
  SignInScreen,
  RaffleScreen,
  ProfileScreen,
  LoadingScreen,
} from '@/screens';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useApolloClient} from '@apollo/client';

import {TabNavigator} from './TabNavigator';

import {Context} from './../context';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const client = useApolloClient();

  const [token, setToken] = useState('');

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getToken();
    setLoading(false);
  }, []);

  // Getting the token from memory, if any.
  const getToken = () => {
    AsyncStorage.getItem('TOKEN').then(token => {
      setToken(token);
    });
  };

  // After login, update the token to change navigation.
  // The function is passed to the component via props.
  const availableToken = useCallback(() => {
    getToken();
  }, []);

  // Deleting user data after logging out of your account.
  // Passed to the component via the context.
  const handleLogout = useCallback(() => {
    AsyncStorage.removeItem('TOKEN').then(() => {
      setToken('');
      client.clearStore();
    });
  }, [setToken, client]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Context.Provider value={{handleLogout}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerShown: false,
          }}>
          {!token ? (
            <Stack.Screen name="signIn">
              {props => <SignInScreen {...props} onLogin={availableToken} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name={'home'} component={TabNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};
