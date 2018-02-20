import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

export default class userInput extends Component {
  constructor(props){
    super(props);
    this.state = { text: '' };
  }

  render(){

    return(
 
<View>

 
      <TextInput
      style={{height: 40, flex: 1, alignItems: 'center'}}
      placeholder="Type Username"
      onChangeText={(text) => this.setState({text})}
    />
   
 
</View>
   


  
    );

  };
};