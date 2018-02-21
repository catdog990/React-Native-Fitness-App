import React, { Component } from 'react';
import {  Text, View, UserInput, StyleSheet } from 'react-native';



export default class Login extends Component {

  render(){

    return(
        <View style={styles.container}>
        
          <UserInput>

          </UserInput>
          
              

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