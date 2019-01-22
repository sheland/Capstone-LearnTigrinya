import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button
} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_hTx7KHdFGFCLoDhy9Sj9lOHn-HKkmp4",
  authDomain: "learntigrinya-c5d56.firebaseapp.com",
  databaseURL: "https://learntigrinya-c5d56.firebaseio.com",
  projectId: "learntigrinya-c5d56",
  storageBucket: "learntigrinya-c5d56.appspot.com",
  messagingSenderId: "240303417955"
};

firebase.initializeApp(firebaseConfig);

export default class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })

  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  navigateHome = () => {
    this.props.navigation.navigate("Home")
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter at least 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)

    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    const navigate = this.navigateHome
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        navigate()
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {
    const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('2074220252876215',
    { permissions:['public_profile']})

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)


      firebase.auth().signInWithCredential(credential).then((response) => {
        this.navigateHome()
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../img/ag.jpg')}
        style={styles.pic}>
      </ImageBackground>
        <Text style={styles.title}>Learn Tigrinya    ትግርኛ</Text>
        <View>

            <Text>Email</Text>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />


            <Text>Password</Text>
            <TextInput
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />

          <Button style={{ marginTop: 10 }}
            title="Login"
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            title="Sign Up"
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            title="Facebook"
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}> Login With Facebook</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    width: "100%"

  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },
  pic: {
    flex: 1,
    width: '100%',
    height: '100%',

  },
  label: {
    height: "20%"
  }

});
