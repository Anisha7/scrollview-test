import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        horizontal={true} // add for horizontal scroll
      >

        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>

        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
    flexDirection: 'row', // add for horizontal scroll
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  box: {
    width: 300, // width for horizontal, height for vertical
    margin: 10,
    backgroundColor: '#f0f'
  }
});
