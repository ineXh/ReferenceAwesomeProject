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
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import IntroCard from './IntroCard';
import WebCard from './WebCard';
import WebCard2 from './WebCard2';
import RowActions1 from './RowActions1';
import NowCard from './NowCard';
import IconDrawer from './IconDrawer';
import SwipeableCard from './SwipeableCard';
import SnapTo from './SnapTo';
import ChangePosition from './ChangePosition';
import ChatHeads from './ChatHeads';
import MoreChatHeads from './MoreChatHeads';
import TimingCard from './TimingCard';
import TimingMultipleCard from './TimingMultipleCard'
import SpringAnimationCard from './SpringAnimationCard'
import ParallelAnimationCard from './ParallelAnimationCard'
import SequenceAnimationCard from './SequenceAnimationCard'
import StaggerAnimationCard from './StaggerAnimationCard'


export default class AwesomeProject2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: undefined,
      input: undefined
    }
  }
  
  onMenuPress() {
    this.setState({currentCard: undefined});
  }

  onButtonPress(Card, input) {
    this.setState({currentCard: Card, input: input});
  } // end onButtonPress

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onMenuPress.bind(this)}>
            <Image style={styles.menuIcon} source={require('../assets/icon-menu.png')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Awesome Project 2</Text>
        </View>

        <View style={styles.body}>
          {this.renderContent()}
        </View>

      </View>
    );
  } // end render

  renderContent() {
    // render Card
    if (this.state.currentCard) {
      //console.log('render Card')
      const Card = this.state.currentCard;
      return <Card input={this.state.input}/>;
    }
    // No Card, render Card List
    return (
      <ScrollView style={styles.menuContainer}>
      <TouchableOpacity onPress={this.onButtonPress.bind(this, IntroCard, {name: 'Bob'})}>
          <Text style={styles.button2}>IntroCard Bob</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, IntroCard, {name: 'Chris'})}>
          <Text style={styles.button}>IntroCard Chris</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, WebCard, undefined)}>
          <Text style={styles.button}>WebCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, WebCard2, undefined)}>
          <Text style={styles.button}>WebCard 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, RowActions1)}>
          <Text style={styles.button}>Row Actions (Google Style)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, NowCard)}>
          <Text style={styles.button}>Google Now-Style Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, IconDrawer)}>
          <Text style={styles.button}>Icon Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, SwipeableCard)}>
          <Text style={styles.button}>SwipeableCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, SnapTo)}>
          <Text style={styles.button}>SnapTo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, ChangePosition)}>
          <Text style={styles.button}>ChangePosition</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, ChatHeads)}>
          <Text style={styles.button}>ChatHeads</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, MoreChatHeads)}>
          <Text style={styles.button}>MoreChatHeads</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, TimingCard)}>
          <Text style={styles.button}>TimingCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, TimingMultipleCard)}>
          <Text style={styles.button}>TimingMultipleCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, SpringAnimationCard)}>
          <Text style={styles.button}>SpringAnimationCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, ParallelAnimationCard)}>
          <Text style={styles.button}>ParallelAnimationCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, SequenceAnimationCard)}>
          <Text style={styles.button}>SequenceAnimationCard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress.bind(this, StaggerAnimationCard)}>
          <Text style={styles.button}>StaggerAnimationCard</Text>
        </TouchableOpacity>
        
      </ScrollView>
    );
  } // end renderContent
} // end AwesomeProject2

/*

  
  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    paddingTop: 0,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#0b5ea5',
    alignItems: 'center',
    zIndex: 1001
  },
  body: {
    flex: 1,
    zIndex: 1000
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 30,
    backgroundColor: '#3c7eb7'
  },
  menuIcon: {
    width: 30,
    height: 30
  },
  headerTitle: {
    marginLeft: 30,
    color: 'white',
    fontSize: 20
  },
  button: {
    color: '#e0e0e0',
    fontSize: 20,
    marginBottom: 24
  },
  button2: {
    color: '#F09B95',
    fontSize: 20,
    marginBottom: 24
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