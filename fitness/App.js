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

   <View style={{ 
        flex: 3,
        flexDirection: 'column',
        
        alignItems: 'center'
        }}>

      <TextInput
      style={{height: 50, width: 150}}
      placeholder="Type Username"
      onChangeText={(text) => this.setState({text})}
    />
      <TextInput
      style={{height: 50, width: 150}}
      placeholder="Type Password"
      onChangeText={(text) => this.setState({text})}
    />
    </View>
  
</View>
  
    );

  };
};