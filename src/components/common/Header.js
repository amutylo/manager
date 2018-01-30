//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//make a components
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return <View style={viewStyle}>
        <Text style={textStyle}>
            { props.headerText }
        </Text>
    </View>
}

const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
//make componenets available for other parts
export { Header };