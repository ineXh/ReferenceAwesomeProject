import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Button, Text, Animated, Slider } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

const Images = [require('../assets/card-photo.jpg'), 
                require('../assets/airport-photo.jpg'),
                require('../assets/tinder-photo.jpg')]

import Now from './NowCard';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
const initialArr = [
  {
    id: 1,
    style:{
      color: "blue",
    },
    text: "text1"
  },
  {
    id: 2,
    style:{
      color: "red",
    },
    text: "text2"
  },
];

export default class PicArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      damping: 0.6,//1-0.7,
      currentCard: Now,
      title: 'Card X',
      tension: 650,//300,
      imageIndex: 0,
      selected_index: 1,
    };
  }
  render() {
    console.log('render1')
    //<PictureItem name="Raxx" picture={Images[1]}/>
    return (
      <View style={styles.container}>
        {this.renderArray()}
        <Text style={styles.welcome}>
          Welcome to PicArrayy, {this.props.input.name}!
        </Text>
        {this.renderText()}       
      </View>
    );
  }
  renderText(){
    return(
    initialArr.map((prop, key) => {
          console.log(prop)
          //<Text style={prop.style} key={key}>{prop.text}</Text>
         return (           
           <PictureItem picture={Images[key]} key={key}/>
         );
    }));
  }
  renderArray(){
    var selected_index = this.state.selected_index;
    var pictureNodes = Images.map(function(picture, index){
      var selected = (selected_index == index) ? true : false;
      return(
          <PictureItem
            picture={picture}
            index={index}
            selected={selected}
            key={index}/>
      );
    });
    return pictureNodes;//<Text>hey</Text>;
  } // end renderArray
} // end PicArray

class PictureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {centered: true, show: true}
  }
  render() {
    console.log('renderX')
    if(!this.state.show){
      console.log(this.state.show)
      return false;
    } 
    else{
      console.log(this.state.show);
      console.log(this.props.picture);
    return (
      <View style={styles.picContainer} ref='nowInstance0'>
        <Image style={styles.image} source={this.props.picture} />
      </View>
      );
    }
  }
  renderX(){
    console.log('render')
    return (
      <Text style={styles.instructions}>
          Abcdf {this.props.name}
        </Text>
    );
  }
} // end PictureItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  picContainer: {
    backgroundColor: '#AA4444',
  },
  image: {
    width: Screen.width *0.2,
    height: Screen.height <= 500 ? 35 : 75
  },
  menuContainer: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 40,
    backgroundColor: '#223f6b'
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