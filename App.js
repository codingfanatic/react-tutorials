import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight,TouchableOpacity, TouchableNativeFeedback,
TouchableWithoutFeedback, View } from 'react-native';

export default class Touchable extends Component{
  _onPressButton(){
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render(){
    return(
      <View style={styles.container}></View>
    );
  }
}

const styles = StyleSheet.create({})