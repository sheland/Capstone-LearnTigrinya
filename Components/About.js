import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../img/newflag.jpg')}
          style={styles.flag}
        >
          <View style={styles.top}>
            <Text style={styles.header}>A B O U T </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>Tigrinya is a Semitic language spoken in Eritrea. Tigrinya is derived from the ancient language Ge&apos;ez script. </Text>
            <Text style={styles.bodyMiddle}>The Ge&apos;ez script is an abugida: each letter represents a consonant & vowel syllable. Letters are organized in groups of similar letters on the basis of both the consonant and the vowel.
            </Text>
            <Text style={styles.nextText}>The columns on the Alphabet Chart represent the consonants, the top row represent abugida (vowels).</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  flag: {
    width: "100%",
    height: "100%"
  },
  top: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: 'steelblue',
    fontSize: 28,
    fontWeight: 'bold',
    borderColor: 'steelblue',
    borderWidth: 5,
    padding: 10,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: 'rgba(255,255,255, .1)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  body: {
    justifyContent: 'center',


  },
  bodyText: {
    color: '#1B1D44',
    fontWeight: 'bold',
    fontSize: 17,
    borderWidth: 6,
    borderColor: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    marginTop: 30,
  },

  bodyMiddle: {
    color: '#1B1D44',
    fontWeight: 'bold',
    fontSize: 17,
    borderWidth: 6,
    borderColor: 'white',
    textAlign: 'center',
    marginTop: 60,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
  },

  nextText: {
    color: '#1B1D44',
    fontWeight: 'bold',
    fontSize: 17,
    borderWidth: 6,
    borderColor: 'white',
    textAlign: 'center',
    marginTop: 60,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',

  }
});
