// import 'react-native-gesture-handler';
import React from 'react';
import {AppNavigator} from './navigation/AppNavigator';

import {SafeAreaView, Text} from 'react-native';

import {SignInScreen, RaffleScreen, ProfileScreen} from '@/screens';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
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
