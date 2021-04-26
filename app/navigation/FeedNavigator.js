import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDtailsScreen from '../screens/ListingDtailsScreen';



const Stack = createStackNavigator();

const FeedNavigator = () => (


    <Stack.Navigator mode="modal" headerMode="float" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Listigs" component={ListingsScreen}  />
        <Stack.Screen name="ListingDtails" component={ListingDtailsScreen}  />
    </Stack.Navigator>




);

export default FeedNavigator;