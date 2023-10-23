import React, {useState} from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {DefaultTheme} from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import {SignInScreen, RaffleScreen, ProfileScreen} from '@/screens';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  const [token, setToken] = useState(false);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}>
        {token ? (
          <AppStack.Screen
            name={'SignIn'}
            component={SignInScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        ) : (
          <AppStack.Screen
            name={'Home'}
            component={TabNavigator}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
