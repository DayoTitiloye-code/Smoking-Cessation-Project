import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome/Welcome';
import Login from './Login';
import Signup from './Signup';


const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode='none'>
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
      <AuthenticationStack.Screen name='Login' component={Login} />
      <AuthenticationStack.Screen name='Signup' component={Signup} />
    </AuthenticationStack.Navigator>
  );
};
