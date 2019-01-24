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
            <Text style={styles.bodyText}>Tigrinya is a Semitic (Afro-Asiatic) language spoken in Eritrea. Tigrinya is written in the Ge&apos;ez script, originally developed for Ge&apos;ez, also called Ethiopic. The Ge&apos;ez script is an abugida: each symbol represents a consonant+vowel syllable, and the symbols are organized in groups of similar symbols on the basis of both the consonant and the vowel</Text>
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


  },
  bodyText: {
    color: 'black'
  }
});
