import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test your knowledge here!</Text>

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
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    height: "90%"

  },
  text: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    height: "70%"

  }
});
