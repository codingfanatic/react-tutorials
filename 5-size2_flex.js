//flex defines the height of a component. It is a ratio compared to other components on screen.
//removing the flex prevents the child components from rendering since it won't have any dimensions
//changing the parent height causes child components to render inside an area defined by the size of the parent

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component{
  render(){
    return(
      //Try removing the 'flex 1' on the parent view
      // The parent will not have dimensions, so the children can't expand.
      // What if you add 'height: 300' instead of 'flex: 1'?
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>

/*
      <View style={{height: 300}}>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>
*/
    );
  }
}