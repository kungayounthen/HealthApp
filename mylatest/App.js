import React,{useState} from 'react'
import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator,TransitionPresets,cardStyleInterpolator} from '@react-navigation/stack';
import OnBoard from './components/OnBoard'
import Dashboard,{BottomTab} from './components/Dashboard'
import  Splash from './components/splash'
import {Screen} from 'react-native-screens'
import BMR from './components/BMI'
import Doctor from './components/doctor'

const Stack=createStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const App=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false,
      ...TransitionPresets.SlideFromRightIOS,
      initialRouteName:'starting'}}>
    <Stack.Screen name="starting" component={Splash} />
    <Stack.Screen name="menu" component={Doctor}/>
    <Stack.Screen name="BMI" component={BMR} />
    <Stack.Screen name="Dashboard" component={Dashboard}/>
    <Stack.Screen name="OnBoard" component={OnBoard} options={{ cardStyleInterpolator: forFade }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
