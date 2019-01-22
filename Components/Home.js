import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../img/pic.jpg')}
        style={styles.pic}>
      </ImageBackground>
      <Text style={styles.title}>Learn ትግርኛ!</Text>
        <Button
          title="Alphabet Chart"
          onPress={() => this.props.navigation.navigate('Chart')}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",

          }}

        />
        <Button
          title="Quiz me!"
          onPress={() => this.props.navigation.navigate('Quiz')}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",

          }}

        />
        <Button
          title="About Tigrinya"
          onPress={() => this.props.navigation.navigate('About')}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",

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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100

  },
  title: {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 60,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    height: '40%',
  },
  pic: {
    flex: 1,
    width: '100%',
    height: '100%',

  }
});
