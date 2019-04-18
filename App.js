import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, ScrollView, 
  TextInput, 
  Dimensions,
  KeyboardAvoidingView
 } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        // horizontal={true} // add for horizontal scroll
      >

          {/* Lets try a form */}
          <KeyboardAvoidingView 
            enabled 
            behavior='position'> 
            {/* behavior property makes input form shift 
            above the keyboard when user is typing */}
            <View style={styles.textContainer}>
              <Text style={styles.label}>User Name</Text>
              <TextInput 
                style={styles.input}
                placeholder="user name"
              />
            </View>
          </KeyboardAvoidingView>

          {/* <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>

          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View> */}

      </ScrollView>
    );
  }
}

const { width, height } = Dimensions

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height,
    // flexDirection: 'row', // add for horizontal scroll
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  box: {
    height: 300, // width for horizontal, height for vertical
    margin: 10,
    backgroundColor: '#f0f'
  },
  // form styles
  textContainer: {
    height: 600,
    justifyContent: 'flex-end',
    backgroundColor: 'yellow',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    fontSize: 24,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: 10
  },
});
