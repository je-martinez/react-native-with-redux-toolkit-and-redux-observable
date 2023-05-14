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

const Tab = createBottomTabNavigator();
const Tabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
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
