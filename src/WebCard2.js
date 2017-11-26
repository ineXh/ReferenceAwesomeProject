import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

window.myvar = 123
const HTMLC = '<div id="myContent">Your HTML content 12</div>'
const jsCode = "document.querySelector('#myContent').style.backgroundColor = '#7294cc';"
export default class WebCard2 extends Component {
  constructor(props) {
    super(props);
  } // end constructor

  componentWillUnmount(){
  }
  
  onWebViewMessage(event) {
       console.log('onWebViewMessage')
       // post back reply as soon as possible to enable sending the next message
       this.myWebView.postMessage(event.nativeEvent.data);
 
       let msgData;
       try {
           msgData = JSON.parse(event.nativeEvent.data);
       }
       catch(err) {
           console.warn(err);
           return;
       }
      
       // invoke target function
       console.log(msgData.data)
       console.log(msgData.targetFunc)
       const response = this[msgData.targetFunc].apply(this, [msgData]);
       console.log(response)
       // trigger success callback
       msgData.isSuccessful = true;
       msgData.args = [response];
       //this.myWebView.postMessage(msgData)
       console.log(JSON.stringify(msgData))
       this.myWebView.postMessage(JSON.stringify(msgData))
  }

  render() {
    console.log('render WebCard')
    return (
      <WebView
        ref={webview => { this.myWebView = webview; }}
        source={require('./index.html')}
        javaScriptEnabledAndroid={true}
        style={{marginTop: 20}}
        onMessage={this.onWebViewMessage.bind(this)}/>
    );
  }
}