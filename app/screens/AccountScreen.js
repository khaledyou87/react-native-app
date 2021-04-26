import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';


const menuItem = [
    {
        title:"My List 1",
        icon:{
            name : "format-list-bulleted",
            backgroundColor:colors.primary,
        }
    },
    {
        title:"My Massages",
        icon:{
            name : "email",
            backgroundColor:colors.secondary,
        },
        targetScreen:routes.MESSAGES,
    },
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screenContainer}>
            <View style={styles.container}>
                <ListItem
                title="khaled younes"
                subTitle="programin from syria"
                image={require("../assets/9.jpg")} />
            </View>
            <View style={styles.container}>
                <FlatList
                data={menuItem}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) => (
                    <ListItem
                    title={item.title}
                    IconComponent={
                        <Icon name={item.icon.name}
                              backgroundColor={item.icon.backgroundColor} />
                    }
                    onPress={() => navigation.navigate(item.targetScreen) }
                     />
                )} />
            </View>
            <ListItem 
            title="Log Out"
            IconComponent={
                <Icon name="logout"
                backgroundColor="#ffe66d" />
            } />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:30
    },
    screenContainer:{
        backgroundColor:colors.light
    }

    
});

export default AccountScreen;