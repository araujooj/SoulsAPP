import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Initial from './Initial/initial'
import Cadastro from './Cadastro/cadastro'
import Login from './Login/login'
import Main from './Main/main'
import Walktrough from './Walktrough/walktrough';
import Unimed from './Unimed/unimed'
import UnimedCard from './Unimed/unimedCard'
import Grupo from './grupo/grupo';

export class App extends Component {
  render() {
    return (
      <Router
        titleStyle={{ color: "#fff", alignItems: "center" }}
        navigationBarStyle={{ backgroundColor: "#28754f" }}
      >
        <Scene key="root">
          <Scene
            key="Login"
            component={Login}
            title="initial"
            hideNavBar={true}
          />
          <Scene
            key="Cadastro"
            component={Cadastro}
            title="Cadastro"
            hideNavBar={true}
          />
          <Scene
            key="Walktrough"
            component={Walktrough}
            title="Walktrough"
            hideNavBar={true}
          />
          <Scene
            key="Main"
            component={Main}
            title="Lojas"
            hideNavBar={true}
          />
          <Scene
            key="Unimed"
            component={Unimed}
            title="Unimed"
            hideNavBar={true}
          />
          <Scene
            key="UnimedCard"
            component={UnimedCard}
            title=""
            hideNavBar={false}
          />
          <Scene key ="Grupo"
          component = {Grupo}
          title = ''
          hideNavBar = {true}
          />
        </Scene>
       
      </Router>
    );
  }
}

export default App;
