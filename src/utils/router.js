// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeContainer from '../container/HomeContainer';
import AuthContainer from '../container/AuthContainer';

const Stack = createStackNavigator();

export function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={AuthContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
