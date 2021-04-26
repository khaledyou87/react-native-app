import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';



const listings = [
    {
        id:1,
        title:'super jachet for you',
        price:100,
        image:require('../assets/jacket.jpg'),
    },
    {
        id:2,
        title:'super shoes for you',
        price:1000,
        image: require("../assets/shoes2_full.jpg")
    }
];

function ListingsScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
        <FlatList
        data={listings}
        keyExtractor={listings => listings.id.toString()}
        renderItem={ ({ item }) =>
    
        <Card 
        title={item.title}
        subTitle={"$" + item.price}
        image={item.image} 
        onPress={() => navigation.navigate(routes.LISTING_DETAILS ,item) }
        />
    }
        
        
        />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding: 15,
        backgroundColor:colors.light
    }
    
});

export default ListingsScreen;