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
  View
} from 'react-native';
const Sound = require('react-native-sound');
import KitColumn from './src/KitColumn'

export default class QWERTYBeatsMobile extends Component {
  buttonStyle(color) {
    return {
      flex: 1,
      backgroundColor: color
    }
  }

  makeSound(file) {
    let sound = new Sound(file, Sound.MAIN_BUNDLE, (error)=>{
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log(file + ' duration in seconds: ' + sound.getDuration() +
            'number of channels: ' + sound.getNumberOfChannels());
      }
    })

    return sound
  }

  render() {
    return (
      <View style={styles.container}>
        <KitColumn sound={this.makeSound('1.wav')} style={this.buttonStyle("red")} />
        <KitColumn sound={this.makeSound('2.wav')} style={this.buttonStyle("green")} />
        <KitColumn sound={this.makeSound('3.wav')} style={this.buttonStyle("yellow")} />
        <KitColumn sound={this.makeSound('4.wav')} style={this.buttonStyle("blue")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('QWERTYBeatsMobile', () => QWERTYBeatsMobile);
