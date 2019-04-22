import React from 'react';
import { Card, CardSection, Button, InputField } from './common';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
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
      <CardSection>
        <Button>
          Log in
        </Button>
      </CardSection>
    </Card>
  );
  }
}

export default LoginForm;
