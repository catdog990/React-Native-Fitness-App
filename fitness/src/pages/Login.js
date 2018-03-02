import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, Button } from 'react-native';
import Verification from '../components/verification';
import Logo from '../components/logo';
import Amplify, { Auth } from 'aws-amplify'



export default class Signup extends Component {

  state= {
    username: '',
    password: '',
    user: {},
    confirmationNumber: ''
  }

  onChangeText(key, value){
    this.setState({
      [key]: value
    })
  }

  signIn(){
    const {username, password} = this.state
    Auth.signIn(
      username, 
      password
    )
      .then( user => {
        this.setState({ user })
        console.log("Logged In!")
      })
      .catch(err => console.log('Error Logging In!:', err))
  }

  confirmSignIn(){
    Auth.confirmSignUp(
      this.state.user,
      this.state.confirmationNumber
    )
    .then(() => console.log("Confirmed!"))
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

            <Button title="Log In" onPress={this.signIn.bind(this)}/>

            <TextInput 
              onChangeText={value => this.onChangeText('confirmationNumber', value)}
              style={styles.userInput}
              placeholder='Confirmation Number'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
            />

            <Button title="Confirm" onPress={this.confirmSignIn.bind(this)}/>

        


             <View style={styles.question}>
            <Text style={styles.textQ}>Don't have an account?</Text>
            <Text style={styles.textS}>Sign Up!</Text>
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
    touch: {
      width:100,
      backgroundColor: '#0087a2',
      borderRadius: 25,
      marginVertical: 10
  
    },
    touchText: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center'
    }
  });