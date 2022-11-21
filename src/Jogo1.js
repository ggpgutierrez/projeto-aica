import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native'
import Shuffle from 'shuffle-array';
import Card from './Card'

const styles = StyleSheet.create({
  viewPrincipal: {
    flexDirection: 'column',
    flex: 1
  },
  viewTopo: {
    width: '100%',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 4
  },
  tentativas: {
    fontSize: 20
  },
  viewConteudo: {
    width: '100%',
    flex: .9
  }
})

export default class Jogo1 extends Component {
  constructor(props) {
    super(props)

    this.cardList = [
      { key: 0, figure: 'medal', show: false, ok: false },
      { key: 1, figure: 'dart', show: false, ok: false },
      { key: 2, figure: 'video_game', show: false, ok: false },
      { key: 3, figure: 'bowling', show: false, ok: false },
      { key: 4, figure: 'tada', show: false, ok: false },
      { key: 5, figure: 'medal', show: false, ok: false },
      { key: 6, figure: 'dart', show: false, ok: false },
      { key: 7, figure: 'video_game', show: false, ok: false },
      { key: 8, figure: 'bowling', show: false, ok: false },
      { key: 9, figure: 'tada', show: false, ok: false },
      { key: 10, figure: 'earth_americas', show: false, ok: false },
      { key: 11, figure: 'hotdog', show: false, ok: false },
      { key: 12, figure: 'popcorn', show: false, ok: false },
      { key: 13, figure: 'confetti_ball', show: false, ok: false },
      { key: 14, figure: '8ball', show: false, ok: false },
      { key: 15, figure: 'earth_americas', show: false, ok: false },
      { key: 16, figure: 'hotdog', show: false, ok: false },
      { key: 17, figure: 'popcorn', show: false, ok: false },
      { key: 18, figure: 'confetti_ball', show: false, ok: false },
      { key: 19, figure: '8ball', show: false, ok: false }
    ]

    this.cards = []
    this.blockPress = false
    this.state = {
      tentativas: 0,
      cards: Shuffle(this.cardList)
    }
  }

  render() {
    return (
      <View style={styles.viewPrincipal}>
        <View style={styles.viewTopo}>
          <Text style={styles.tentativas}>{this.state.nome}</Text>
          <Text style={styles.tentativas}>Tentativas: {this.state.tentativas}</Text>
        </View>
        <View style={styles.viewConteudo}>
          <FlatList
            ref={component => this.flatList = component}
            data={this.state.cards}
            extraData={this.state}
            keyExtractor={item => item.key}
            numColumns={4}
            renderItem={({ item, index }) => {
              return (
                <Card
                  item={item}
                  ref={component => this.cards[index] = component}
                  onPress={() => this.pressCard(index)}
                />
              )
            }}
          />
        </View>
      </View>
    )
  }

  shuffleCards() {
    this.setState({ cards: Shuffle(this.cardList), tentativas: 0 })
  }

  pressCard(index) {
    if (this.blockPress) return
    if(this.state.tentativas >= 3){
      Alert.alert(
        "Perdeu!",
        "Que pena, você perdeu!",
        [
          {
            text: "Menu Principal",
            onPress: () => this.props.navigation.goBack(null),
            style: "cancel"
          },
        ]
      );
    }
    const currentCard = this.cards[index]
    const activeCards = this.cards.filter(it => it.state.show && !it.state.ok)
    
    if (activeCards.length == 0) return currentCard.setState({ show: true })

    currentCard.setState(
      { show: true },
      () => {
        const cards = this.cards.filter(it => it.state.show && !it.state.ok)
        const equalCards = cards
          .filter(it => it.state.figure == currentCard.state.figure).length == 2
        
        this.setState({ tentativas: ++this.state.tentativas })

        if (equalCards) {
          cards.map(it => it.setState({ ok: true }))
          //if (this.cards.filter(it => !it.state.show).length == 0) this.checkRank()
          return
        }

        this.setBlockPress(true)
        setTimeout(() => {
          cards.map(it => it.setState({ show: false }))
          this.setBlockPress(false)
        }, 1000)
      }
    )
  }

  setBlockPress(bool) {
    this.blockPress = bool
  }
}
