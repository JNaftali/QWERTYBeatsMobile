import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class KitColumn extends Component {
  _shortPress() {
    props.sound.play((success) => {
      if (success) {
        console.log('successfully finished playing ');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    })
  }

  _longPress() {

  }.bind(this)

  render() {
    return (
      <TouchableHighlight onPress={ this._shortPress } style={props.style} >
        <View />
      </TouchableHighlight>
    )
  }
}
