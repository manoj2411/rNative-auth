import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { isLoggedIn: null }

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyApRnpGm5kUqfTFRWGpDHYP_cUkwJZd3eg',
      authDomain: 'auth01-2411.firebaseapp.com',
      databaseURL: 'https://auth01-2411.firebaseio.com',
      projectId: 'auth01-2411',
      storageBucket: 'auth01-2411.appspot.com',
      messagingSenderId: '357830086882'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  handleSignout() {
    console.log('signin out...');
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return <Button pressHandler={this.handleSignout}>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
      return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header text="Authentication app" />
        {this.renderContent()}
      </View>
    );
  }
}
