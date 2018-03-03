import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, Image } from 'react-native';



export default class Logo extends Component {

  render(){

    return(

        <View style={styles.container}>
            
             <Image style={{width:150, height: 150}}
             source={require('../images/Nick.png')} />

           

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