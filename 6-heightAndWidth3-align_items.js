//alignItems determiens the alignment of children along the secondary axis
//If primary is row, secondary is column and vice versa
//Options: flex-start, center, flex-end, and stretch.

import React, { Component } from 'react';
import {View} from 'react-native';

export default class RoyalFlow extends Component{
  render(){
    return(
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      //alignItems: 'stretch' stretches along the secondary axis (row)
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItenms: 'stretch',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}