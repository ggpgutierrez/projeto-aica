import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import { color } from 'react-native-reanimated'

const style = StyleSheet.create({
  card: {
    flexGrow: 1,
    margin: 0,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff'
  },
  touchable: {
    padding: 20,
    width: '100%',
    alignItems: 'center'
  },
  correct: {
    backgroundColor: '#d4edda'
  },
  incorrect: {
    backgroundColor: '#f8d7da'
  },
  emoji: {
    fontSize: 25
  }
})

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {...props.item}
  }

  render() {
    return (
      <View style={this.getStyle()}>
        <TouchableOpacity
          style={style.touchable}
          onPress={this.props.onPress}>
          <Text style={{color: this.state.color}}>{this.state.letra}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  getStyle() {
    if (this.state.show && this.state.ok) return {...style.card, ...style.correct}
    if (this.state.show && !this.state.ok) return {...style.card, ...style.incorrect}
    return {...style.card}
  }
}
