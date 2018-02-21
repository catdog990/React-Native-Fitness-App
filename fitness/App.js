import React, { Component } from 'react';
import {  Text, View, StatusBar, StyleSheet } from 'react-native';
import Login from './src/pages/Login';



export default class userInput extends Component {

  render(){

    return(
        <View style= {styles.container}>
          <StatusBar
          backgroundColor="#0088a3"
          barStyle="light-content"
          />

        <Login />
              

        </View>
          
    );

  };
};

const styles = StyleSheet.create ({
  container : {
    backgroundColor: '#00b8d4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text : {
    color: 'white',
    fontSize: 16
  }
});