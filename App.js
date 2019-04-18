import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
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
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  box: {
    height: 300,
    margin: 10,
    backgroundColor: '#f0f'
  }
});
