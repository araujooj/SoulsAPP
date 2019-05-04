import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Initial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overlayContainer}>
          <Image source={require('./logo3.png')} style={styles.imageHeader}>
          </Image>
        </View>

        <View style={styles.downContainer}>
          <View style={styles.rowColumn}>
            <TouchableHighlight
              style={{ width: '40%', padding: 20, marginRight: '13%' }}
              onPress={() => Actions.cadastroConsumidor()}>
              <View style={styles.consumidor}>
                <Image source={require("./1.png")}
                  style={styles.imageConsumidor}></Image>
                <Text style={styles.textFormat}>Sou Consumidor</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Actions.cadastroLojista()}
              style={{ width: '40%', padding: 20, marginLeft: '3%' }}>
              <View style={styles.lojista}>
                <Image source={require("./2.png")}
                  style={styles.imageLojista}></Image>
                <Text style={styles.textFormat}>Sou Lojista ou Atacadista</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.loginbtn}>
            <TouchableOpacity onPress={() => Actions.Login()}>
              <Text style={styles.buttonText}>Já tenho uma conta</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#a06df2'
  },
  downContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: '#27343e',
  },
  imageHeader: {
    width: '75%',
    height: '60%',
    alignSelf: 'center',
    marginTop: '10%'
  },
  lojista: {
    width: 120,
    backgroundColor: '#a06df2',
    height: '35%',
    alignItems: 'center',
    marginTop: '5%',
  },
  rowColumn: {
    flexDirection: 'row',
    width: "100%",
    height: '90%',
    alignItems: 'center'
  },
  consumidor: {
    width: 120,
    backgroundColor: '#a06df2',
    height: '35%',
    alignItems: 'center',
    marginTop: '5%',
    marginRight: '5%'
  },
  imageLojista: {
    width: '65%',
    height: '70%'
  },
  imageConsumidor: {
    width: '65%',
    height: '70%'
  },
  textFormat: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 19
  },
  loginbtn: {
    alignSelf: 'center',
    width: '83%',
    height: 35,
    padding: 5,
    backgroundColor: '#a06df2',
    borderRadius: 45,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'rgba(255,255,255, .9)'
  },
})
