import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './src/aws-exports'
Amplify.configure(AWSConfig)

import Routes from './src/pages/routes';
import FetchExample from './src/pages/profile'
import Macro from './src/pages/macro';
import store from './src/redux/store'
import { Macrosys } from './constants/api';





export default class userInput extends Component {



  render(){


    return(
      

<FetchExample/>
             

    );

  };
};


