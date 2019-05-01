//justifcyContent determines the way children components are distributed along the primary axis of the parent component
//Options include flex-start, center, flex-end, space-around, space-between and space-evenly.

import React, { Component } from 'react';
import { View } from 'react-native';

export default class whoKnows extends Component{
  render(){
    return(
      <View style={{
        flex: 1,
        //Try setting flexDirection to 'row' (renders all child components in the top row)
        //Try setting justifyContent to 'center' ( renders all child components in the center )
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}