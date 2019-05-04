import React, { Component } from 'react'
import {Router, Scene} from 'react-native-router-flux';

import Initial from './Initial/initial'
import Consumidor from './cadastroConsumidor/consumidor'
import Lojista from './cadastroLojista/lojista'
import Login from './Login/login'
import Main from './Main/main'

export class App extends Component {
  render() {
    return (
      <Router
      titleStyle={{ color: '#fff', alignItems:'center'}}
      navigationBarStyle={{ backgroundColor: '#a06df2'}}>
          <Scene key = 'root'>
            <Scene key = 'Initial'
            component = {Initial}
            title = 'initial'
            hideNavBar = {true}
            />
             <Scene key = 'cadastroConsumidor'
            component = {Consumidor}
            title = 'consumidor'
            hideNavBar = {true}
            /> 
              <Scene key = 'cadastroLojista'
            component = {Lojista}
            title = 'lojista'
            hideNavBar = {true}
            /> 
            <Scene key = 'Login'
            component = {Login}
            title = 'login'
            hideNavBar = {true}
            />
            <Scene key = 'Main'
            component = {Main}
            title = 'Lojas'
            hideNavBar = {false}
            />
          </Scene>
      </Router>
    )
  }
}

export default App;
