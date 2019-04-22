import React from 'react';
import { View, TextInput, Text } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{ label }</Text>
    <TextInput
      placeholder={placeholder}
      autoCorrect={false}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = {
  input: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row', // it makes the children come in a single row.
    alignItems: 'center'
  }
};

export { InputField };
