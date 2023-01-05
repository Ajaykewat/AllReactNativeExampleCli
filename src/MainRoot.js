import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NetworkProvider } from 'react-native-offline';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Provider} from 'react-redux';
import {store} from './Redux/store';


const Stack = createNativeStackNavigator();
import Home from './Home';
import Slider from './ImageSlider';
import ImageCarousalSlider from './ImageCarousalSlider';
import ImageDownload from './ImageDownload';
import ImageLoadingProgress from './ImageLoadingProgress';
import MultiSelectCheckBox from './MultiSelectCheckBox';
import MultiSelectItem from './MultiSelectItem';
import GlassmorphedScreen from './GlassmorphedScreen';
import Movie from './MovieScreen/Movie';
import ImagePickerScreen from './ImagePickerScreen/ImagePickerScreen'
import Favorites from './MovieScreen/Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoScreen from './ImagePickerScreen/VideoScreen';
import LongPressMultiSelect from './GalleryScreen/LongPressMultiSelect';





const MainRoot = () => {
  return (
    <Provider store={store}>
    <NetworkProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LongPressMultiSelect'>
        <Stack.Screen name="Tab" component={TabScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} />
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="ImageCarousalSlider" component={ImageCarousalSlider} />
        <Stack.Screen name="ImageDownload" component={ImageDownload} />
        <Stack.Screen name="ImageLoadingProgress" component={ImageLoadingProgress} />
        <Stack.Screen name="MultiSelectCheckBox" component={MultiSelectCheckBox} />
        <Stack.Screen name="MultiSelectItem" component={MultiSelectItem} />
        <Stack.Screen name="GlassmorphedScreen" component={GlassmorphedScreen} />
        <Stack.Screen name="LongPressMultiSelect" component={LongPressMultiSelect} />
      </Stack.Navigator>
    </NavigationContainer>
    </NetworkProvider>
    </Provider>
  )
}

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const TabScreen =()=>{
  return(
    <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="Movies"
      component={Movie}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="movie-filter" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="favorite" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default MainRoot

const styles = StyleSheet.create({})