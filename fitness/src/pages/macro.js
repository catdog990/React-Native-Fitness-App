import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class Macro extends Component {

    state= {
        Gender: '',
        Age: '',
        Weight: '',
        Height: '',
        excerciseLevel: '',
        Goal: ''
      }

      onChangeText(key, value){
        this.setState({
          [key]: value
        })
      }
    

    calc(){

        const weight = this.state.Weight;
        const goal = this.state.Goal;
        const protein = weight * 1;
        const fat = weight * 0.5;
        const carbs = () => {
            if(goal === 'Lose Weight'){
                weight * 1
            }
            else if(goal === 'Maintain'){
                weight * 2
            }
            else{
                weight * 3
            }
           
        }
        

    };


    render(){

    return(
        <View style={styles.container}>

             <Text style={styles.text}> Gender </Text>
             <TextInput 
                onChangeText={value => this.onChangeText('Gender', value)}
                style={styles.userInput} 
                placeholder='Male/Female'/> 

             <Text style={styles.text}> Age </Text>
             <TextInput 
                onChangeText={value => this.onChangeText('Age', value)}
                style={styles.userInput} 
                placeholder='' 
                keyboardType='numeric'/>

             <Text style={styles.text}> Weight </Text>
             <TextInput 
                onChangeText={value => this.onChangeText('Weight', value)}
                style={styles.userInput} 
                placeholder='lbs' 
                keyboardType='numeric'/> 

        {/* This will needed to be added, but not sure how both will be added to the 'Height' attribute */}
        {/*  onChangeText={value => this.onChangeText('username', value)} */}
             <Text style={styles.text}> Height </Text>
             <TextInput 
                 style={styles.userInput} 
                 placeholder='ft' 
                 keyboardType ='numeric'/>

             <TextInput 
                style={styles.userInput} 
                placeholder='in' 
                keyboardType='numeric'/>

             <Text style={styles.text}> Exercise Level </Text>
             <TextInput 
                onChangeText={value => this.onChangeText('excerciseLevel', value)}
                style={styles.userInput} 
                placeholder='None / Moderate / Active'/>

             <Text style={styles.text}> Primary Goal </Text>
             <TextInput 
                onChangeText={value => this.onChangeText('Goal', value)}
                style={styles.userInput} 
                placeholder='Lose Weight / Maintain / Gain'/>

     
            <TouchableOpacity style={styles.button} onPress={this.calc.bind(this)}><Text style={styles.text}> Calculate </Text></TouchableOpacity>
           
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