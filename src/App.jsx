import React from 'react';

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
