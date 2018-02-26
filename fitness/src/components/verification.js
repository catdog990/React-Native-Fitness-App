import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';



export default class Verification extends Component {

  render(){

    return(
        <View style={styles.container}>
        
        <TextInput style={styles.userInput}
        placeholder="Username"
        placeholderTextColor="white"
        underlineColorAndroid='rgba(0,0,0,0)'
        />
        <TextInput style={styles.userInput}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="white"
        underlineColorAndroid='rgba(0,0,0,0)'
        />

        <TouchableOpacity style={styles.touch}>
            <Text style={styles.touchText}> Login </Text>
        </TouchableOpacity>
          
          
              

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