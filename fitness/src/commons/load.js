import React from 'react';
import { ActivityIndicator , View } from 'react-native';

export default class LoadingScreen extends React.Component {

    render(){
        return(){
         <View style={styles.load}>
            <ActivityIndicator size="large"/>
        </View>
        };
    };
};
  


const styles = {
    load: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

