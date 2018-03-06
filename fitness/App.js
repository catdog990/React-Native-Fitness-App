import React, { Component } from 'react';
import {  Text, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './src/aws-exports'
Amplify.configure(AWSConfig)

import Routes from './src/pages/routes';
import Macro from './src/pages/macro';
import store from './src/redux/store'
import { fetchMacro } from './constants/api'




export default class userInput extends Component {

  fetch('http://localhost:3000/api/macros')
  .then(function(response) {
    return response.json();
  })
  .then(function(macros) {
    console.log(macross);
  });
  render(){

    return(
      <View>

     <Macro />
    
      
      </View>
             

    );

  };
};


