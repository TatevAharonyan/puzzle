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

  const getToken = () => {
    AsyncStorage.getItem('TOKEN').then(token => {
      setToken(token);
    });
  };

  const availableToken = useCallback(() => {
    getToken();
  }, []);

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
