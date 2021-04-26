import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image, onPress}) {
    return (

      <TouchableWithoutFeedback onPress={onPress} >
       <View style={styles.card}>
           <Image style={styles.image} source={image}></Image>
           <View style={styles.detailsContainer}>
           <AppText style={styles.title}>{title}</AppText>
           <AppText style={styles.subTitle} >{subTitle}</AppText>
           </View>
       </View>
       </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        marginBottom:20,
        borderRadius:15,
        overflow:'hidden'

    },
    image: {
        width: "100%",
        height: 200,
      },
      detailsContainer: {
        padding: 20,
      },
      subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
      },
      title: {
        marginBottom: 7,
      },
    
});

export default Card;