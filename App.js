import React from "react";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Components/Login'
import Home from './Components/Home'
import Chart from './Components/Chart'
import Quiz from './Components/Quiz'
import About from './Components/About'
import Details from './Components/Details'


const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Home: {screen: Home},
    Chart: {screen: Chart},
    About: {screen: About},
    Quiz: {screen: Quiz},
    Details: {screen: Details}
  },
  {
      initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);
