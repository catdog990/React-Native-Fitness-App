import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup';
import Macro from './macro';

export default class Routes extends Component {


    render(){

        return(
            <Router>
                <Stack key='root' hideNavBar>
                    <Scene key='login' component={Login} title='Login' initial/>
                    <Scene key='signup' component={Signup} title='SignUp'/>
                    <Scene key='macro' component={Macro} title='Macro'/>
                </Stack>
            </Router> 
              
        );
    
      };



};