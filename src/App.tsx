/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Provider } from 'react-redux';
import HomeScreen from 'screens/home/home.screen';
import { store } from 'store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from 'screens/settings/settings.screen';
import FavoritesScreen from 'screens/favorites/favorites.screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Tabs = (): JSX.Element => {
  const icons = {
    Home: <Icon name="ios-book" color="#4F8EF7" size={15} />,
    Favorites: <Icon name="heart" color="#4F8EF7" size={15} />,
    Settings: <Icon name="settings" color="#4F8EF7" size={15} />,
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => icons.Home,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => icons.Favorites,
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => icons.Settings,
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
