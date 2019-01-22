import React from 'react';
import data from '../data/letters.json';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button
} from 'react-native';
import Letters from '../data/letters.json';
import { RNSketchCanvas } from '@terrylinla/react-native-sketch-canvas';

import Canvas from './Canvas';

export default class Details extends React.Component {

  // handleCanvas = async (canvas) => {
  //   const ctx = await canvas.getContext('2d');
  //   ctx.fillStyle = 'red';
  //   ctx.fillRect(0, 0, 100, 100);
  // }

  render(){

    const { navigation } = this.props;
    const letter = navigation.getParam('letterObject');
    console.log(letter);

    return (
      <View style={styles.container}>
        <Text style={styles.mainLetter}>{letter.letter}</Text>
        <Text style={styles.main}>Pronunciation: {letter.pronouce}</Text>
        <Button
          title="Audio"
          buttonStyle={{
            color: "aliceblue"
          }}
        />
        <Text style={styles.title}>Draw {letter.letter} below!</Text>

        <Canvas />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 0,
    margin: 0,
    borderWidth: 3,
    width: 730,
    height: 410,
  },
  mainLetter: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,

  }

});
