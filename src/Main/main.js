import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity ,ImageBackground} from "react-native";

import { Actions } from "react-native-router-flux";

const Tutorial2 = () => {
  return (
    <ImageBackground source={require("./11.png")} style={styles.container}>
      <View style={styles.overlayContainer}>
        <View style={styles.whiteContainer}>
          <View style={styles.circle}>
            <Image source={require("./grupo.png")} style={styles.header} />
          </View>
          <Text style={styles.title}>Sua próxima missão</Text>
          <Text style={styles.upoint}>Recompensa: 7 UPoints</Text>
          <View style={styles.contentView}>
            <Text style={styles.contentText}>
              Junte-se a um grupo de pessoas e comece a se exercitar
            </Text>
          </View>
          <TouchableOpacity onPress={Actions.Grupo()}>
            <Image source={require("./ok.png")} style={styles.header} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1
  },
  whiteContainer: {
    width: "70%",
    height: "65%",
    marginLeft: "15%",
    marginTop: "15%",
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "rgba(0,0,0, .1)",
    marginTop: "10%"
  },
  header: {
    width: 120,
    height: 120,
    marginTop: "3%",
    marginLeft: "2%"
  },
  title: {
    fontSize: 25,
    color: "rgba(0,0,0, .9)"
  },
  contentView: {
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%"
  },
  contentText: {
    fontSize: 20,
    color: "rgba(0,0,0, .8)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 15,
    marginTop: '5%'
  },
  upoint:{
       fontSize: 20,
    color: "rgba(0,0,0, .8)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 15,
    marginTop: '5%',
    fontWeight: 'bold'
  },
  buttonContainer: {
    borderColor: "#fff",
    borderWidth: 2,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  loginbtn: {
    alignSelf: "center",
    width: "83%",
    height: 35,
    padding: 5,
    backgroundColor: "#00995d",
    borderRadius: 45,
    marginTop: "10%",
    textAlign: "center"
  },
  buttonText: {
    fontSize: 16,
    alignSelf: "center",
    color: "#fff"
  }
});
export default Tutorial2;
