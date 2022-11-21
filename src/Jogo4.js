import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert
  
} from 'react-native'
import Shuffle from 'shuffle-array';
import Card from './Card2'

const styles = StyleSheet.create({
  viewLetra: {
    textAlign: 'center',
    fontSize: 20,
    top: 20
  },
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

export default class Jogo4 extends Component {
  constructor(props) {
    super(props)
    this.cardList = []
    this.letter = null;
    this.cardAlfabeto = [
      { key: 0, letra: 'a', show: false, ok: false, color: '' },
      { key: 1, letra: 'b', show: false, ok: false, color: '' },
      { key: 2, letra: 'c', show: false, ok: false, color: '' },
      { key: 3, letra: 'd', show: false, ok: false, color: '#008B8B'},
      { key: 4, letra: 'e', show: false, ok: false, color: '#' },
      { key: 5, letra: 'f', show: false, ok: false, color: '#' },
      { key: 6, letra: 'g', show: false, ok: false, color: '#' },
      { key: 7, letra: 'h', show: false, ok: false, color: '#' },
      { key: 8, letra: 'i', show: false, ok: false, color: '#' },
      { key: 9, letra: 'j', show: false, ok: false, color: '#' },
      { key: 10, letra: 'k', show: false, ok: false, color: '#' },
      { key: 11, letra: 'l', show: false, ok: false, color: '#' },
      { key: 12, letra: 'm', show: false, ok: false, color: '#' },
      { key: 13, letra: 'n', show: false, ok: false, color: '#' },
      { key: 14, letra: 'o', show: false, ok: false, color: '#' },
      { key: 15, letra: 'p', show: false, ok: false, color: '#' },
      { key: 16, letra: 'q', show: false, ok: false, color: '#' },
      { key: 17, letra: 'r', show: false, ok: false, color: '#' },
      { key: 18, letra: 's', show: false, ok: false, color: '#' },
      { key: 19, letra: 't', show: false, ok: false, color: '#' },
      { key: 20, letra: 'u', show: false, ok: false, color: '#' },
      { key: 21, letra: 'v', show: false, ok: false, color: '#' },
      { key: 22, letra: 'w', show: false, ok: false, color: '#' },
      { key: 23, letra: 'x', show: false, ok: false, color: '#' },
      { key: 24, letra: 'y', show: false, ok: false, color: '#' },
      { key: 25, letra: 'z', show: false, ok: false, color: '#' },

    ]
    for (let i = 0; i < 20; i++) {
        let n = Math.floor(Math.random() * 10)
        this.cardList[i] = this.cardAlfabeto[n];
    }
    this.letter = this.cardList[0].letra;
    this.cardList[1].letra = this.cardList[0].letra;
    this.cardList[2].letra = this.cardList[0].letra;
    this.cardList[3].letra = this.cardList[0].letra;
    this.cardList[4].letra = this.cardList[0].letra;

    for( let a = 0; a < 20; a++){
      this.cardList[a].color = this.cardList[0].color= this.getRandomColor();

    }
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
        <Text style={styles.viewLetra}>LETRA:  {this.letter}</Text> 
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

  getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  pressCard(index) {
    if (this.blockPress) return

    const currentCard = this.cardList[index]

    if(currentCard.letra == this.letter){
        this.setState({ tentativas: ++this.state.tentativas })
        return this.cards[index].setState({ show: true, ok: true})
    }else{
        this.setState({ tentativas: ++this.state.tentativas })
    }

   

}

}
