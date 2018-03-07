import React from 'react';
import { FlatList, Text, View, ActivityIndicator, ScrollView  } from 'react-native';

export default class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.0.10:3000/api/macros')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.macro,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
    //   <View style={{flex: 1, paddingTop:20}}>
    //     <FlatList
    //       data={this.state.dataSource}
    //       renderItem={({item}) => <Text>{item.Weight}, {item.Goal}</Text>}
    //       keyExtractor={(item, index) => index}
    //     />
    //   </View>
        <View   style={styles.wut}>
       <ScrollView 
       horizontal 
       contentContainerStyle={styles.contentContainer}
       data={this.state.dataSource}
       renderItem={({item}) => <Text>{item.Weight}, {item.Goal}</Text>}
       keyExtractor={(item, index) => index}
       >
       
       <Text>{item.Weight}, {item.Goal}</Text>
     
        </ScrollView>
</View>
        


    );
  }
}

const styles =  {
    wut: {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }, 
    contentContainer: {
        alignItems: 'center'
    
    }
}
