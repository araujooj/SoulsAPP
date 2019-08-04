import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

export default class Walktrough extends Component {
  state = {
    email: "",
    password: "",
    isAuthenticated: false
  };
  register = async () => {
    const { email, password } = this.state;
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      this.setState({
        isAuthenticated: true
      });
      Actions.Main();
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("./11.png")}
        style={styles.container}
      >
        <View style={styles.top}>
          <Image
            source={require("./icone.png")}
            style={styles.imageHeader}
          />
        </View>

        <View>
          <Text style={styles.buttonText}>
            Venha conosco ser um campeão de saúde, fazendo exercícios
          </Text>
        </View>

        <View>
          <Text style={styles.buttonText}>
            Junte-se a um grupo e suba no ranking da cidade!
          </Text>
        </View>
     
          <TouchableOpacity
            style={styles.loginbtn}
            onPress={() => Actions.Unimed()}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  imageHeader: {
    width: "90%",
    height: "90%",
    alignSelf: "center"
  },
  top: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  formularios: {
    alignItems: "center",
    marginHorizontal: 30,
    borderColor: "rgba(0,0,8, .7)"
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    width: "100%",
    backgroundColor: "rgba(0,0,8, .7)",
    borderRadius: 45,
    paddingHorizontal: 4,
    opacity: 0.4,
    textAlign: "justify",
    padding: 6,
    color: "#fff"
  },
  loginbtn: {
    marginTop: "10%",
    alignSelf: "center",
    width: "83%",
    height: 35,
    padding: 5,
    backgroundColor: "#00995d",
    borderRadius: 45,
    textAlign: "center"
  },
  buttonText: {
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
    marginLeft: "10%",
    marginRight: '10%',
    marginTop: '0%',
    marginBottom: '0%'
  },
  btnSignUp: {
    fontSize: 16,
    alignSelf: "center",
    color: "#fff",
    marginTop: "4%"
  },
  btnForget: {
    fontSize: 16,
    alignSelf: "flex-start",
    color: "#fff",
    marginTop: "40%",
    marginLeft: "5%",
    marginBottom: "3%"
  }
});
