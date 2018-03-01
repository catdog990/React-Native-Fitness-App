import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet } from 'react-native';
import Verification from '../components/verification';
import Logo from '../components/logo';



export default class Login extends Component {

  render(){

    return(
        <View style={styles.container}>
        
            <Logo />
            <Verification />
          
          <View style={styles.question}>
            <Text style={styles.textQ}>Don't have an account?</Text>
            <Text style={styles.textS}>Signup!</Text>
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
  }
});