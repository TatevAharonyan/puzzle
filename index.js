/**
 * @format
 */
import 'react-native-gesture-handler';
import React, {useState, useMemo} from 'react';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {AppNavigator} from '@/navigation/AppNavigator';

const client = new ApolloClient({
  uri: 'https://api.quickclick.online/content/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
