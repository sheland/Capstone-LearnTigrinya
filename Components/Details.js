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
import Audio from './sub_component/audio'
// Import the react-native-sound module
import Sound from 'react-native-sound'

// Enable playback in silence mode
Sound.setCategory('Playback');

const EXAMPLEAUDIO = "https://firebasestorage.googleapis.com/v0/b/learntigrinya-c5d56.appspot.com/o/Be.m4a?alt=media&token=6da6806b-4920-4e3e-af07-20e0297ccdb4"


export default class Details extends React.Component {
  constructor(props){
    super(props)
    this.audio = new Sound(EXAMPLEAUDIO, null, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // download complete
    });

  }

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
          onPress={() => Audio(this)}
          buttonStyle={{
            color: "aliceblue"
          }}
        />
        <Text style={styles.main}>Write {letter.letter} below!</Text>


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
