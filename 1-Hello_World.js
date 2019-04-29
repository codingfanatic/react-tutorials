import React, { Component } from 'react';
import { Text, View } from 'react-native';

//Components are the visible content rendered on the screen
export default class HelloWorldApp extends Component {

//Render functions return the JSX to be rendered and appear on screen
  render() {
    return (
//JSX is the markup language embedded in the Java/Kotlin code compiled in the app
      <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}