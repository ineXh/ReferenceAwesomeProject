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
export default class WebCard extends Component {
  render() {
    return (
      <WebView
        source={require('./test.html')}
        //source= {{html: HTMLC}}
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        style={{marginTop: 20}}/>
    );
  }
}