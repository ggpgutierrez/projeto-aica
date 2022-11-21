import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import HomeScreen from './src/Home';
import Jogo1Screen from './src/Jogo1';
import Jogo4Screen from './src/Jogo4';
const Stack = createStackNavigator();

function App({initialRouteName = 'Home'}) {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Jogo1" component={Jogo1Screen} />
      <Stack.Screen name="Jogo4" component={Jogo4Screen} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;