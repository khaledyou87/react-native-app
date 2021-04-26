import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { 
         StyleSheet,
         Text,
         View,
         SafeAreaView,
         Platform,
         TextInput,
         Button,
         Image
        } from 'react-native';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDtailsScreen from './app/screens/ListingDtailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewScreen from './app/screens/ViewScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Pick from './app/components/Pick';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import *as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';






export default function App() {

 


 

  
  return(

    <NavigationContainer theme={navigationTheme} >
      <AppNavigator/>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 20 : 0,
   
  },
});
