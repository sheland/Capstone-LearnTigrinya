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
      this.props.navigation.navigate("Home")

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
        source={require('../img/man.jpg')}
        style={styles.pic}>
      </ImageBackground>
        <Text style={styles.title}>Learn Tigrinya    ትግርኛ</Text>
        <View>


            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5, padding: 5}}
              autoCorrect={false}
              placeholder = "Email"
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              backgroundColor='#eee'

            />

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5, padding: 5}}
              placeholder = "Password"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              backgroundColor='#eee'
            />

          <Button style={{ marginTop: 0, position: 'absolute', bottom: 0 }}
            title="Login"
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
          </Button>
          <Button style={{ marginTop: 0, position: 'absolute', bottom: 0 }}
            title="Sign Up"
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
          </Button>
          <Button style={{ marginBottom: 0, position: 'absolute', bottom: 10 }}
            title="Login With Facebook"
            onPress={() => this.loginWithFacebook()}
          >
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
    fontSize: 60,
    fontFamily: 'AmericanTypewriter-CondensedBold',
    textAlign: 'center',
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    marginTop: 160

  },
  pic: {
    flex: 1,
    width: '100%',
    height: '100%',

  },
  label: {
    height: "20%"
  },
  input: {
    textAlign: 'center',

  }

});
