import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'

import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native';

export interface HomeScreenPropos{

}
const HomeScreen = () => {
  const navigation = useNavigation()

  const openJogo1 = () =>{
      navigation.dispatch(CommonActions.navigate({
        name: 'Jogo1'
      }))
  }

  const openJogo4 = () =>{
    navigation.dispatch(CommonActions.navigate({
      name: 'Jogo4'
    }))
}
    return (
    
      <SafeAreaView style={ {flex: 1}}>
      <View > 
      <Image 
          style={styles.tinyLogo}
          source={require("../assets/autismo.png")}/>
      </View>
      <View style={styles.container}>
          
          <TouchableOpacity style={styles.button} onPress={openJogo1}>
          <Image 
             style={{
              alignSelf: 'center', 
              width: 100,
              height: 100
          }}
          source={require("../assets/abelha.png")}/>
          <Text style={styles.jogo2}>Vogal</Text>

        </TouchableOpacity>     
        <TouchableOpacity style={styles.button} onPress={openJogo4}>
          <Image 
           style={{
              alignSelf: 'center', 
              width: 100,
              height: 100
          }}
          source={require("../assets/A.png")}/>
          <Text style={styles.jogo2}>Combinação</Text>

        </TouchableOpacity>        
    </View>
    </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: "wrap",
    marginVertical: 150
  },
  jogo2: {
    textAlign: 'center',
    color: "#000000",
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor:  "#FFFFFF",
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 0
    
    
  },
  button: {
    backgroundColor: '#00D1FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 120,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    

  },
  button2: {
    backgroundColor: '#00D1FF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    
  },
  tinyLogo: {
    width: 200,
    height: 70,
    alignSelf: 'auto', 
    marginLeft: 10

  } 

  
});

export default HomeScreen