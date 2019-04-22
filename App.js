import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { isLoggedIn: null }

  componentDidMount() {
    const config = {
      apiKey: 'api-key',
      authDomain: 'myapp.firebaseapp.com',
      databaseURL: 'https://myapp.firebaseio.com',
      projectId: 'myapp',
      storageBucket: 'myapp.appspot.com',
      messagingSenderId: '1234'
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
