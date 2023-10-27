import React, {useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TabBarButton,
  HomeIcon,
  GiftIcon,
  LableIcon,
  UserIcon,
} from '@/components';
import {responsiveWidth} from '@/helpers';
import {RaffleScreen, ProfileScreen} from '@/screens';

const TabStack = createBottomTabNavigator();

export const TabNavigator = ({onLogout}) => {
  const [currentRoute, setCurrentRoute] = useState('raffle');

  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: responsiveWidth(50),
          borderTopWidth: 0,
          elevation: 3,
          borderRadius: responsiveWidth(11),
        },
      }}>
      <TabStack.Screen
        name={'raffle'}
        component={RaffleScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <HomeIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'raffle'} {...props} />
          ),
        }}
      />
      <TabStack.Screen
        name={'gift'}
        component={RaffleScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <GiftIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'Profile'} {...props} />
          ),
        }}
      />

      <TabStack.Screen
        name={'lable'}
        component={RaffleScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <LableIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'Profile'} {...props} />
          ),
        }}
      />

      <TabStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <UserIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'profile'} {...props} />
          ),
        }}></TabStack.Screen>
    </TabStack.Navigator>
  );
};
