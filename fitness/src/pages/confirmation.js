import React, { Component } from 'react';
import {  TextInput, View, StatusBar, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import Logo from '../components/logo';




export default class ConfirmUser extends Component {

  render(){

    return(
 
    <View style={styles.container}>
        <Logo />

         <TextInput 
              onChangeText={value => this.onChangeText('confirmationNumber', value)}
              style={styles.userInput}
              placeholder='Confirmation Number'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
            />

       <TouchableOpacity 
              onPress={this.confirmSignUp.bind(this)}
              style={styles.button}>
 
                <Text style={styles.buttonText}> Confirm </Text>

            </TouchableOpacity>

      </ View>
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

  }
});