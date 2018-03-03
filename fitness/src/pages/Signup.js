import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Verification from '../components/verification';
import Logo from '../components/logo';
import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../aws-exports';
Amplify.configure(AWSConfig);
import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {

  state= {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationNumber: ''
  }

  onChangeText(key, value){
    this.setState({
      [key]: value
    })
  }

  LogIn(){
    Actions.login()
  }

  signUp(){
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        phone_number: this.state.phone_number,
        email: this.state.email,
      }
    })
      .then(() => console.log("Signed Up!"))
      .catch(err => console.log('Error Signing Up!:', err))
  }

  confirmSignUp(){
    Auth.confirmSignUp(
      this.state.username,
      this.state.confirmationNumber
    )
    .then(() => {
      console.log("Confirmed!");
      Actions.macro(); 
    
  })
    .catch(err => console.log('Error with Confirmation!:', err))
  }

  render(){

    return(
        <View style={styles.container}>
        
            <Logo />
         

            <TextInput 
              onChangeText={value => this.onChangeText('username', value)}
              style={styles.userInput}
              placeholder='Username'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
            />
            <TextInput 
              onChangeText={value => this.onChangeText('password', value)}
              style={styles.userInput}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
            />
            <TextInput 
              onChangeText={value => this.onChangeText('phone_number', value)}
              style={styles.userInput}
              placeholder='Phone Number'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
              keyboardType='numeric'
            />
            <TextInput 
              onChangeText={value => this.onChangeText('email', value)}
              style={styles.userInput}
              placeholder='Email'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
              keyboardType='email-address'
            />

            <TouchableOpacity 
              onPress={this.signUp.bind(this)}
               style={styles.button}>

               <Text style={styles.buttonText}> Sign Up </Text>

            </TouchableOpacity>

            <TextInput 
              onChangeText={value => this.onChangeText('confirmationNumber', value)}
              style={styles.userInput}
              placeholder='Confirmation Number'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
              keyboardType='numeric'
            />

            <TouchableOpacity 
              onPress={this.confirmSignUp.bind(this)}
              style={styles.button}>
 
                <Text style={styles.buttonText}> Confirm </Text>

            </TouchableOpacity>

        

          <View style={styles.question}>

              <Text style={styles.textQ}>Already have an account?</Text>

              <TouchableOpacity onPress={this.LogIn}><Text style={styles.textS}>Log In!</Text></TouchableOpacity>

          </View>

             
          
              

        </View>
          
    );

  };
};

const styles = StyleSheet.create ({
    container : {
      backgroundColor: '#263238',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    userInput : {
      width:300,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: 'white',
      marginVertical: 10
  
    },
    button : {
      width: 150,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      marginVertical: 10,
      borderRadius: 25,
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center'
    },
    question : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    textQ: {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    textS: {
      color: 'white',
      paddingHorizontal: 10
    },
 
  });