import React from 'react';
import { Image, View,StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

function ListingDtailsScreen({route}) {
    
    const listing=route.params;



    return (
       <View>
           <Image
           style={styles.image}
           source={listing.image}></Image>
           <View style={styles.detailsContainer}>
           <AppText style={styles.title}>{listing.title}</AppText>
           <AppText style={styles.price}>${listing.price}</AppText>
           <View style={styles.userContainer}>
           <ListItem
           image={require("../assets/4.jpg")}
           title="khaled younes"
           subTitle=" 5 listing " />

           </View>
           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
        padding: 20,

    },
    image:{
        width:'100%',
        height:300,
    },
    title:{
        fontSize:24,
        fontWeight:'500',

    },
    price:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.secondary,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:40,
    }


    
});

export default ListingDtailsScreen;