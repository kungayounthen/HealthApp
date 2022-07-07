import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import OnBoard from '../components/OnBoard'
import Dashboard from '../components/Dashboard'

const Stack=createStackNavigator(
  {
    OnBoard:{Screen:OnBoard},
  }
);
const AuthStack=()=>{
<Stack.Navigator ScreenOptions={{headerShown:false}} initialRouteName="Login">
    <Stack.Screen name="Login" component="Login">
    </Stack.Screen>
    </Stack.Navigator>
}

export default AuthStack;