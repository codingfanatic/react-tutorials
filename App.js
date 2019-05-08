import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View} from 'react-native';

export default class SecitonListBasics extends Component {
  render() {
    return(
      <View style={StyleSheet.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 
              'John', 'Julie']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    paddingTop: 22
  }

  item: {

  }
})