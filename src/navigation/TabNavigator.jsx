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

export const TabNavigator = () => {
  const [currentRoute, setCurrentRoute] = useState('Raffle');

  const {bottom} = useSafeAreaInsets();

  const {t} = useTranslation();

  return (
    <TabStack.Navigator
      screenListeners={{
        focus: e => {
          setCurrentRoute(e.target?.split('-')[0]);
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: responsiveWidth(65) + bottom / 1.5,
          borderTopWidth: 0,
          display: flex,
          elevation: 3,
          borderRadius: responsiveWidth(11),
        },
      }}>
      <TabStack.Screen
        name={'Raffle'}
        component={RaffleScreen}
        options={{
          tabBarIcon: () => <HomeIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'Raffle'} {...props} />
          ),
        }}
      />
      <TabStack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <GiftIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'Profile'} {...props} />
          ),
        }}
      />

      <TabStack.Screen
        name={'Profil'}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <LableIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'Profile'} {...props} />
          ),
        }}
      />

      <TabStack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <UserIcon />,
          tabBarButton: ({...props}) => (
            <TabBarButton focused={currentRoute === 'Profile'} {...props} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};
