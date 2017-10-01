/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

const HTMLC = '<div id="myContent">Your HTML content 12</div>'
const jsCode = "document.querySelector('#myContent').style.backgroundColor = '#7294cc';"
export default class AwesomeProject2 extends Component {
  render() {
    return (
      <WebView
        source={require('./src/test.html')}
        //source= {{html: HTMLC}}
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        style={{marginTop: 20}}/>
    );
  }
}
//
/**
<WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}/>
        
<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          Hey, My name is Mr.Cow4.
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
