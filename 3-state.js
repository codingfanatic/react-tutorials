import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
//States are dynamic data used to control components
//Initialize in the constructor and call setState to change it
//Ideally, states are set when an app receives new data from a server or the user's input
//Redux and Mobx are are state containers which can be used to achieve this instead of calling setState
    this.state = { isShowingText: true };

//Toggle the text using a state every 1000 ms (or once per second)
//setState re-renders every time the Timer ticks (every second)
  setInterval(() => (
    this.setState(previousState => (
    { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
}

  render() {
    if (!this.state.isShowingText){
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component{
  render() {
    return (
//Custom prop text displays text. The state is what causes it to toggle on and off.
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML?' />
        <Blink text='Look at me look at me look at me'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);