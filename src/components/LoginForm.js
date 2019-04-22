import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, InputField, Spinner } from './common';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', loading: false };
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.handleLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.handleLoginSuccess.bind(this))
          .catch(this.handleLoginFailure.bind(this));
      });
  }

  handleLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false
    });
  }

  handleLoginFailure() {
    this.setState({
      error: 'Authentication failed!',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
        <Button pressHandler={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
  }

  render() {
    return (
    <Card>
      <CardSection>
        <InputField
          placeholder="abc@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
      </CardSection>
      <CardSection>
        <InputField
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
      </CardSection>

      <Text style={styles.errorText}>
        {this.state.error}
      </Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
  );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
