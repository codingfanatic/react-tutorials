import React, { Component } from 'react';
//Image is a component used to display an image
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://i.pinimg.com/474x/bf/61/fa/bf61fa89840d1607a5561db90cf5bfc5--bleach-logo-anime-tattoos.jpg'
    };
    return(
//Source is a prop for controlling the way an image looks
//Braces are used here to surround pic, a JavaScript expression.
//Putting JavaScript expressions (like pic) inside braces in JSX is a common practice
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

//This can be skipped if using Create React Native App...whatever that is
AppRegistry.registerComponent('AwesomeProject', () => Bananas);