import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
    return (
       <ImageBackground
       blurRadius={5}
       style={styles.background}
       source={require("../assets/background.jpg")} 
       >
           <View style={styles.logoContainer}>
               <Image style={styles.logo}
               source={require("../assets/logo-red.png")} />
               <Text style={styles.tagline}>hi i am khaled go native</Text>

           </View>
           <View style={styles.buttonContainer}>
           <AppButton title="Login"  onPress={() => navigation.navigate(routes.LOGIN) } ></AppButton>
           <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER) } ></AppButton>

           </View>
          
       </ImageBackground>

       
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center'
    },
    buttonContainer:{
        padding: 20,
        width:'100%'

    },
    logo:{
        width:100,
        height:100,
        
    },
    tagline:{
        fontSize:25,
        paddingVertical:10,
        fontWeight:'600',

    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'

    },
})

export default WelcomeScreen;