import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import allLetters from '../data/allletters.json';
import Sound from 'react-native-sound'
import Audio from './sub_component/audio'

// Enable playback in silence mode
Sound.setCategory('Playback');

const EXAMPLEAUDIO = "https://firebasestorage.googleapis.com/v0/b/learntigrinya-c5d56.appspot.com/o/Be.m4a?alt=media&token=6da6806b-4920-4e3e-af07-20e0297ccdb4"




export default class Quiz extends React.Component {
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

  handleShowLetters() {
    const matchedLetter = allLetters[0].letter
    const wrongLetter = allLetters[2].letter
    console.log(matchedLetter);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test your knowledge here!</Text>
        <Text style={styles.mainText}>Press the audio button and then choose from the two rendered letters. Match the sound with the letter!</Text>
        <Button
          title="Audio"
          onPress={() => Audio(this)}
          buttonStyle={{
            color: "aliceblue"
          }}
        />
        <Button
          title="Show letters"
          buttonStyle={{
            color: "aliceblue",

          }}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  title: {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    marginBottom: 10


  },

  mainText: {
    color: 'steelblue',
    fontSize: 20,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
  }
});
