import React from 'react';
import data from '../data/letters.json';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import Letters from '../data/letters.json';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import Canvas from 'react-native-canvas';

export default class Details extends React.Component {

  handleCanvas = async (canvas) => {
    const ctx = await canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);
  }

  render(){

    const { navigation } = this.props;
    const letter = navigation.getParam('letterObject');
    console.log(letter);

    return (
      <ScrollView style={styles.container}>
        <Text>Letter: {letter.letter}</Text>
        <Text>IPA: {letter.ipa}</Text>
        <Text>Vowel: {letter.vowel}</Text>
        <Text>Pronounce: {letter.pronouce}</Text>


        <Canvas ref={this.handleCanvas}/>
      </ScrollView>
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
});
