import React from 'react';
import { 
         StyleSheet,
         Platform, 
        } from 'react-native';


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
