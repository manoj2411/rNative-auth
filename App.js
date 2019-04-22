import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyApRnpGm5kUqfTFRWGpDHYP_cUkwJZd3eg',
      authDomain: 'auth01-2411.firebaseapp.com',
      databaseURL: 'https://auth01-2411.firebaseio.com',
      projectId: 'auth01-2411',
      storageBucket: 'auth01-2411.appspot.com',
      messagingSenderId: '357830086882'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header text="Authentication app" />
        <LoginForm />
      </View>
    );
  }
}
