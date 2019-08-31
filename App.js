/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image
} from 'react-native'

import GlobalFont from 'react-native-global-font'
import styled from 'styled-components/native'
import { createStackNavigator, createAppContainer, TabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'

import ProfileScreen from './src/screens/profile/index'
import CreateProgramScreen from './src/screens/create-program/index'
import CalendarScreen from './src/screens/calendar/index'


componentDidMount = () => {
   let fontName = 'Montserrat'
   GlobalFont.applyGlobal(fontName)
}

// const { width } = Dimensions.get('window') makes drawer fullscreen
const CustomDrawerComponent = (props) => (
  <SafeAreaView style= {{ flex: 1, backgroundColor: 'rgb(103,17,43)' }}>
    <View style= {{  height: 150 , alignItems: 'center', justifyContent: 'center'}}>
      {/* <Image source={require('./src/assets/icons/logo.jpeg')} style={{ height:150, width: "100%" }} /> */}
      <Text style= {{ fontSize: 24, fontFamily: 'Montserrat' , color: 'white'}}>ABSENT</Text>
    </View>

    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(

  {
  'Takvim': CalendarScreen,
  'Ders Programı': CreateProgramScreen,
  'Profil': ProfileScreen
  },

  {
    //initialRouteName: "Home"
    hideStatusBar: true,
    //drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: 'rgb(216,193,206)',
    contentComponent: CustomDrawerComponent,
    //drawerWidth: width, makes drawer fullscreen
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: 'rgb(171,34,94)',
      labelStyle: {
        fontFamily: 'Montserrat'
      }
    },
  }
)

export default createAppContainer(AppDrawerNavigator);
