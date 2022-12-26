import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
import Home from './Home';
import Slider from './Slider';
const MainRoot = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Slider" component={Slider} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainRoot

const styles = StyleSheet.create({})