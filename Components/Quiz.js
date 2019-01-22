import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test your knowledge here!</Text>
        <Text style={styles.mainText}>Press the audio button and then choose from the two rendered letters. Match the sound with the letter!</Text>
        <Button
          title="Audio"
          buttonStyle={{
            color: "aliceblue"
          }}
        />
        <Button
          title="Show letters"
          buttonStyle={{
            color: "aliceblue"
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
