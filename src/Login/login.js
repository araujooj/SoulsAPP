import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import firebase from 'react-native-firebase'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false
  }
  login = async () => {
    const { email, password } = this.state
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      this.setState({
        isAuthenticated: true,
      })
      Actions.Main()
    } catch (err) {
      alert(err);
    }

  }

  render() {
    return (
      <ImageBackground
        source={require('./11.jpg')}
        style={styles.container}
        blurRadius={0.7}
      >
        <View style={styles.overlayContainer}>

          <View style={styles.top}>
            <Image source={require('./logo.png')} style={styles.imageHeader}>
            </Image>
          </View>

          <View style={styles.formularios}>
            <TextInput
              placeholder='Email'
              textContentType="emailAddress"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#fff"
              selectionColor="#fff"
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            />
            <TextInput
              placeholder='Senha'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              autoCorrect={false}
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            />
            <View style={styles.loginbtn}>
              <TouchableOpacity style={styles.botao} onPress={this.login}>
                <Text style={styles.buttonText}>Login</Text></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.btnForget}>Esqueceu a senha?</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageHeader: {
    width: '75%',
    height: '60%',
    alignSelf: 'center',
    marginTop: '10%'
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,8, .7)',
  },
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formularios: {
    alignItems: 'center',
    marginHorizontal: 30,
    borderColor: 'rgba(0,0,8, .7)'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,8, .7)',
    borderRadius: 45,
    paddingHorizontal: 4,
    opacity: 0.4,
    textAlign: 'justify',
    padding: 6,
    color: '#fff'
  },
  loginbtn: {
    alignSelf: 'center',
    width: '83%',
    height: 35,
    padding: 5,
    backgroundColor: '#a06df2',
    borderRadius: 45,
    marginTop: '10%',
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff'
  },
  btnSignUp: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
    marginTop: '4%'
  },
  btnForget: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: '#fff',
    marginTop: '40%',
    marginLeft: '5%',
    marginBottom: '3%'
  }
})
