import React, { Component } from 'react';
import {  Text, View, StatusBar, StyleSheet } from 'react-native';
import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './src/aws-exports'
Amplify.configure(AWSConfig)

import Routes from './src/pages/derp';





export default class userInput extends Component {

  render(){

    return(
      

        <Routes />
            

       
         


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
  text : {
    color: 'white',
    fontSize: 16
  }
});