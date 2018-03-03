import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class Macro extends Component {

    state= {
        Male: '',
        Age: '',
        Weight: '',
        Height: '',
        ExcerciseLevel: '',
        PrimaryGoal: ''
      }

      onChangeText(key, value){
        this.setState({
          [key]: value
        })
      }
    

    calc(){

        const weight = userWeight;
        const goal = userGoal;
        const protein = weight x 1;
        const fat = weight x 0.5;
        const carbs = 
        if(goal === 'Lose Weight'){
            weight x 1;
        }
        else if(goal === 'Maintain'){
            weight x 2;
        }
        else{
            weight x 3; 
        };

        

    }


    render(){

    return(
        <View style={styles.container}>

             <Text style={styles.text}> Gender </Text>
             <TextInput style={styles.userInput} placeholder='Male/Female'/> 

             <Text style={styles.text}> Age </Text>
             <TextInput style={styles.userInput} placeholder='' keyboardType='numeric'/>

             <Text style={styles.text}> Weight </Text>
             <TextInput style={styles.userInput} placeholder='lbs' keyboardType='numeric'/> 

             <Text style={styles.text}> Height </Text>
             <TextInput style={styles.userInput} placeholder='ft' keyboardType ='numeric'/>
             <TextInput style={styles.userInput} placeholder='in' keyboardType='numeric'/>

             <Text style={styles.text}> Exercise Level </Text>
             <TextInput style={styles.userInput} placeholder='None / Moderate / Active'/>

             <Text style={styles.text}> Primary Goal </Text>
             <TextInput style={styles.userInput} placeholder='Lose Weight / Maintain / Gain'/>

     
            <TouchableOpacity style={styles.button}><Text style={styles.text}> Calculate </Text></TouchableOpacity>
           
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
        color: 'rgba(255,255,255,0.4)',
        marginVertical: 10,
        textAlign: 'center'
      },
      text: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
      },
      button : {
        width: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginVertical: 10,
        borderRadius: 25,
      },
});