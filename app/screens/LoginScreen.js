import React, { useState } from 'react';
import * as Yup from 'yup';
import {  Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

import { AppFormField, SubmitButton, AppForm } from '../components/forms';



//import AppButton from '../components/AppButton';
//import AppTextInput from '../components/AppTextInput';
//import { Formik } from 'formik';
//import AppText from '../components/AppText';
//import ErrorMessage from '../components/forms/ErrorMessage';
//import AppFormField from '../components/forms/AppFormField';
//import SubmitButton from '../components/forms/SubmitButton';
//import AppForm from '../components/forms/AppForm';




function LoginScreen(props) {


    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(4).label("Password")
    }) ;

    //const [email ,setEmail]=useState();
    //const [password ,setPassword]=useState();

    return (
        
        <Screen style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo-red.png")} />
            <AppForm initialValues={{ email: '', password: '' }}
            onSubmit={ (values) => console.log(values)}
            validationSchema={validationSchema} >
                <AppFormField 
                                 autoCapitalize="none"
                                 autoCorrect={false}
                                 icon="email"
                                 keyboardType="email-address"
                                 name="email"
                                 
                                 placeholder="Email"
                                 textContentType="emailAddress" />
                                
                                 
            <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        
                        placeholder="Password"
                       name="password"
                        secureTextEntry
                        textContentType="password"/>
                         
                        

             <SubmitButton tittle="Login" /> 
              

            </AppForm>
                      

        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 10,

    },

    image:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20

    }
    
});

export default LoginScreen;