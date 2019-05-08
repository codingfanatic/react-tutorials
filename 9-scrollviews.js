//ScrollViews are generic scrolling containers which can host multiple components/views
//Able to scroll horizontal by setting the horizontal property
//Best for displaying a small amount of things of a limited size
//FlatList component is better for a longer list
import React, { Component } from 'react';
import { ScrollView, Image, Text, View} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
  render() {
    return(
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width:64, height:64}} />
        <Text style={{fontSize: 80}}>React Native (lawl)</Text>
     </ScrollView>
    );
  }
}