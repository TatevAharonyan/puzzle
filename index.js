/**
 * @format
 */
import React, {useState, useMemo} from 'react';

import {AppRegistry} from 'react-native';
// import App from '@/App';
import {name as appName} from './app.json';

import {SignInScreen, RaffleScreen, ProfileScreen} from '@/screens';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.quickclick.online/content/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  const [screen, setScreen] = useState('signIn');

  const change = v => {
    setScreen(v);
  };
  // До исправления навигации
  const result = useMemo(() => {
    switch (screen) {
      case 'signIn':
        return <SignInScreen onChangeScreen={change} />;
      case 'raffle':
        return <RaffleScreen onChangeScreen={change} />;
      case 'profile':
        return <ProfileScreen onChangeScreen={change} />;
    }
  }, [screen]);

  return <ApolloProvider client={client}>{result}</ApolloProvider>;
};

AppRegistry.registerComponent(appName, () => App);
