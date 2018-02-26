import React, { Component } from 'react';
import {  Text, View, StatusBar, StyleSheet } from 'react-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';




export default class userInput extends Component {

  render(){

    return(
        <View style= {styles.container}>
          <StatusBar
          backgroundColor="#0088a3"
          barStyle="light-content"
          />

        <Signup />
            

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
  text : {
    color: 'white',
    fontSize: 16
  }
});