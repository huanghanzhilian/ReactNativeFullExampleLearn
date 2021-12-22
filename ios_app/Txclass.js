import React, { Component } from 'react'

import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import HomePage from './pages/Home'
import ListPage from './pages/List'
import DetailPage from './pages/Detail'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTab () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#23b8ff',
        inactiveTintColor: '#999'
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name) {
            case 'Home':
              iconName = 'ios-home'
              break
            case 'List':
              iconName = 'ios-list'
              break
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        }
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="List" component={ListPage} />
    </Tab.Navigator>
  )
}

class Txclass extends Component {

  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Tab"
            component={BottomTab}
          />
          <Stack.Screen
            name="DetailPage"
            component={DetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Txclass
