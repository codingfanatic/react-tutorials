import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render(){
    return(
//View is a component which can contain other components. View > Text
//In other words, View is a parent component, and its children are contained within
//Style is a prop for styling the appearance of the View component
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

//SYNTAX NOTE! Always export a default class
export default class LotsOfGreetings extends Component{
  render() {
    return(
//View is a component which can contain other components. View > Greeting
//Name is the prop we created to customize the content of the Greeting component
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeria' />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);