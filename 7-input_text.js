//TextInput is a component which allows users to enter text
//onChangeText is a prop called every time the text is changed
//onSubmitEditing prop takes a function to be called when text is submitted

import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class RoyalFlow extends Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

//Input is trimmed and replaced with the pizza emoji. Each word is turned into an emoji
  render(){
    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}