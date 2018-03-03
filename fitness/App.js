import React, { Component } from 'react';
import {  Text, View, StatusBar, StyleSheet } from 'react-native';
import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './src/aws-exports'
Amplify.configure(AWSConfig)

import Routes from './src/pages/routes';
import Macro from './src/pages/macro';





export default class userInput extends Component {

  render(){

    return(

      <Macro/>        

    );

  };
};


