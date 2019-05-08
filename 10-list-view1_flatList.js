//FlatList component displays a scrolling list of changing and similarly structured data
//Good for long lists where the quantity of items might change
//Only renders what is on screen while ScrollView renders everything at once
//Props include data and renderItem.
//data is the source of info for the list
//renderItem takes an item from the source and returns a formatted component to render
//The FlatListBasics component then renders the FlatList and all Text components.

import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
        //Each key adds to the source of information for the list
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          //Each item from the source is returned as a formatted Text component
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'steelblue',
  },
})