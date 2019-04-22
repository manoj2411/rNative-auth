import React from 'react';
import { Text, View } from 'react-native';

// "View" tag is used to position element, wrap element and style element.

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </View>
    );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center', // change items vertivally (up - down)
    alignItems: 'center', // change items horizontally (left - right)
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};


export { Header };
