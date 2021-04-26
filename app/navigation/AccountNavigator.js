import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';




const stack = createStackNavigator();

const AccountNavigator = () => (


    <stack.Navigator >
        <stack.Screen name="Account" component={AccountScreen}  />
        <stack.Screen name="Messages" component={MessagesScreen}  />
    </stack.Navigator>




);

export default AccountNavigator;