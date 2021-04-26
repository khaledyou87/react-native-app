import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import routes from './routes';



const tab = createBottomTabNavigator();

const AppNavigator=() => (

    <tab.Navigator>

        <tab.Screen name="Feed" component={FeedNavigator} options={{
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }} />
        <tab.Screen name="ListingEdit" component={ListingEditScreen} options={({navigation}) => ({
            tabBarButton:() =><NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
        })} />
        <tab.Screen name="Account" component={AccountNavigator} options={{
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons name="account" color={color} size={size} />
        }}  />



    </tab.Navigator>




);

export default AppNavigator;