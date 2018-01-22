import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Animated, WebView } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class WebCard3 extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Interactable.View style={{height: 100}}
        horizontalOnly={true}
          snapPoints={[
            {x: 50},
            {x: 0, damping: 0.8},
            {x: -50}
          ]}
          animatedValueX={this._deltaX}>
          <WebView
                source= {{html: HTMLC}}
                injectedJavaScript={jsCode}
                javaScriptEnabledAndroid={true}
                style={{flex: 1}}/>
                <WebCardX/>
        </Interactable.View>
        <Interactable.View style={{height: 100}}
        horizontalOnly={true}
          snapPoints={[
            {x: 50},
            {x: 0, damping: 0.8},
            {x: -50}
          ]}
          animatedValueX={this._deltaX}>
          <WebView
                source= {{html: HTMLC}}
                injectedJavaScript={jsCode}
                javaScriptEnabledAndroid={true}
                style={{flex: 1}}/>
                <WebCardX/>
        </Interactable.View>
      </View>
    );
  }
}
// <Image style={styles.image} source={require('../assets/card-photo.jpg')} />
window.myvar = 123
const HTMLC = '<div id="myContent">Your HTML content 12</div>'
const source =  {uri: 'http://google.com'};
const jsCode = "document.body.style.backgroundColor ='#AA94cc';document.querySelector('#myContent').style.backgroundColor = '#7294cc';"
class WebCardX extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  } // end constructor
  componentWillUnmount(){
  }
  
  onWebViewMessage(event) {
       console.log('onWebViewMessage')
  }
  render() {
    return (
      <View style={{flex: 1, marginTop: 2, backgroundColor: '#bb3322'}}>
         <Interactable.View style={{flex: 1}}
          horizontalOnly={true}
          snapPoints={[
            {x: 390},
            {x: 0, damping: 0.8},
            {x: -390}
          ]}
          animatedValueX={this._deltaX}>
            <Animated.View style={[styles.card, {
              transform: [{
                rotate: this._deltaX.interpolate({
                  inputRange: [-250, 0, 250],
                  outputRange: ['10deg', '0deg', '-10deg']
                })
              }]
            }]}>
              <Image style={styles.image} source={require('../assets/card-photo.jpg')} />

            <Animated.View style={[styles.overlay, {backgroundColor: '#de6d77'}, {
              opacity: this._deltaX.interpolate({
                inputRange: [-120, 0],
                outputRange: [0.8, 0],
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp'
              })
            }]}>
              <Text style={styles.overlayText}>Trash</Text>
            </Animated.View>

            <Animated.View style={[styles.overlay, {backgroundColor: '#2f9a5d'}, {
              opacity: this._deltaX.interpolate({
                inputRange: [0, 120],
                outputRange: [0, 0.8],
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp'
              })
            }]}>
              <Text style={styles.overlayText}>Keep</Text>
            </Animated.View>

          </Animated.View>
        </Interactable.View>
      </View>
    );
  }
} // end WebCardX
/*
<WebView
              source= {{html: HTMLC}}
              injectedJavaScript={jsCode}
              javaScriptEnabledAndroid={true}
              style={{flex: 1}}/>              
<Image style={styles.image} source={require('../assets/card-photo.jpg')} />
 <WebView source={source} style={{}} />
*/
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: 80,
    width: 80,
    justifyContent: 'center',
    /*alignItems: 'center',*/
    alignSelf: 'center'
  },
  card: {
    width: 80,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 0
  },
  image: {
    width: 80,
    height: 80
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayText: {
    fontSize: 10,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaaaaa'
  }
});
