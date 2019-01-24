import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import allLetters from '../data/allletters.json';
import Sound from 'react-native-sound';
import Audio from './sub_component/audio';

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

    this.state={
      showletter:false,
      falseletter:false
    }
  }



  handleShowLetters = () => {
    this.setState({showletter:!this.state.showletter})
    this.setState({falseletter:!this.state.falseletter})
      return this.state.showletter, this.state.falseletter

  }

  render() {
    const {showletter} = this.state;
    const {falseletter} = this.state;
    const textValue = showletter?"በ":"";
    const falseValue = falseletter?"ቀ":"";
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test your knowledge here!</Text>
        <Text style={styles.mainText}>Press the audio button and choose from the two rendered letters. Match the sound with the letter!</Text>
        <Button
          title="Audio"
          underlayColor='red'
          onPress={() => Audio(this)}
        />
        <Button
          title="Show letters"
          onPress={this.handleShowLetters}
        />
        <TouchableOpacity onPress={() => Alert.alert('Correct')}>
          <View style={styles.valueContainer}>
              <Text style={styles.trueValue}>{textValue}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Incorrect')}>
          <View style={styles.valueContainer}>
              <Text style={styles.falseValue}>{falseValue}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  valueContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },

  title: {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20


  },

  mainText: {
    color: 'steelblue',
    fontSize: 20,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    borderWidth: 1
  },

  trueValue: {
    fontSize: 100,
  },

  falseValue: {
    fontSize: 100,
  },


});
