import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Explore from '../screens/Main/Explore';
import Saved from '../screens/Main/Saved';
import MapScreen from '../screens/Main/Map';
import Profile from '../screens/Main/Profile';
import colors from '../colors';
import { isAndroid } from '../utils';

const Main = createBottomTabNavigator();

export default () => (
  <Main.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 0,
      },
      labelStyle: {
        textTransform: 'uppercase',
        fontWeight: '600',
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const android = isAndroid();
        let iconName = `${android ? 'md-' : 'ios-'}`;
        if (route.name === 'Explore') {
          iconName += 'search';
        } else if (route.name === 'Saved') {
          iconName += 'heart';
        } else if (route.name === 'Map') {
          iconName += 'map';
        } else if (route.name === 'Profile') {
          iconName += 'person';
        }
        return (
          <Ionicons
            name={iconName}
            size={26}
            color={focused ? colors.red : '#333'}
          />
        );
      },
    })}
  >
    <Main.Screen name="Explore" component={Explore}></Main.Screen>
    <Main.Screen name="Saved" component={Saved}></Main.Screen>
    <Main.Screen name="Map" component={MapScreen}></Main.Screen>
    <Main.Screen name="Profile" component={Profile}></Main.Screen>
  </Main.Navigator>
);
