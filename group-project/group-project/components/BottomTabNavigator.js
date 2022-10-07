import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BuyersScreen from '../components/Buyers';
import ArtistsScreen from '../components/Artists';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Buyers') {
                iconName = 'painting';
              } else if (route.name === 'Artists') {
                iconName = 'search';
              }

              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  size={size}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: 'black',
            style: {
              height: 130,
              borderTopWidth: 0,
              backgroundColor: '#5653d4',
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: 'Rajdhani_600SemiBold',
            },
            labelPosition: 'beside-icon',
            tabStyle: {
              marginTop: 25,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 30,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#5653d4',
            },
          }}>
          <Tab.Screen name="Buyers" component={BuyersScreen} />
          <Tab.Screen name="Artists" component={ArtistsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
