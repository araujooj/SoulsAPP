import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class Grupo extends Component {
    render() {
        return (
          <ImageBackground
            source={require("./11.png")}
            style={styles.container}
          >
            <Text style = {styles.title}>
              Escolha um grupo
            </Text>
            <View style={styles.top}>
              <TouchableOpacity style={styles.circle} onPress = {console.log('teste ')}>
                <View style={styles.circle}>
                  <Text style={{ color: "#fff", alignSelf: "center" }}>
                    Ciclismo
                  </Text>
                  <Image
                    source={require("./vestuario.jpg")}
                    style={styles.circle}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.circle}>
                <View style={styles.circle}>
                  <Text style={{ color: "#fff", alignSelf: "center" }}>
                    Caminhada
                  </Text>
                  <Image
                    source={require("./alimentos.jpg")}
                    style={styles.circle}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.circle}>
                <View style={styles.circle}>
                  <Text style={{ color: "#fff", alignSelf: "center" }}>
                    Corrida
                  </Text>
                  <Image
                    source={require("./peças.jpg")}
                    style={styles.circle}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.market}>
              <TouchableOpacity style={{ color: "rgba(0,0,0, .2)" }}>
                <View style={styles.market1}>
                  <Image
                    source={require("./stop.jpg")}
                    style={styles.image1}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      marginLeft: "4%"
                    }}
                  >
                    Grupo de ciclistas {"\n"} Ranking: Nº 33
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.market2}>
                  <Image
                    source={require("./pesca.jpg")}
                    style={styles.image1}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      marginLeft: "4%"
                    }}
                  >
                    Grupo de Corredores {"\n"} Ranking: Nº 22
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styles.market3} />
            </View>
          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  searchBar: {
    width: "94%",
    borderRadius: 45,
    paddingHorizontal: 4,
    opacity: 0.4,
    textAlign: "justify",
    padding: 6,
    color: "#fff",
    marginTop: "2%",
    marginLeft: "2%"
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  top: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: "1%"
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginTop: "3%",
    marginLeft: "7%"
  },
  header: {
    width: "30%",
    height: "30%",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 1
  },
  market: {
    margin: "4%"
  },
  image1: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  market1: {
    flexDirection: "row"
  },
  market2: {
    marginTop: "5%",
    flexDirection: "row"
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textAlign: 'center'
  }
});