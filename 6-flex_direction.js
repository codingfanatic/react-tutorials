//Flexbox is designed to display consistent layouts on different sized screens
//flexDirection determines the primary axis of a layout
import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDirectionBasics extends Component{
  render(){
    return(
//flexDirections organize child components vertically (column) by default. Row organizes them horizontally.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}