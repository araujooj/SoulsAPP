import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    KeyboardAvoidingView,
    Picker

} from 'react-native'
import { withFormik } from 'formik';

import api from '../api'

const Consumidor = (props) => {
    return(
      <KeyboardAvoidingView style = {styles.container}>
          <View style={styles.formularios}>
          <TextInput
          value ={props.values.name} placeholder = 'Nome'
          onChangeText = {text => props.setFieldValue('name', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
            <TextInput
          value ={props.values.email} placeholder = 'Email' keyboardType= 'email-address'
          onChangeText = {text => props.setFieldValue('email', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
           <TextInput
          value ={props.values.cpf} placeholder = 'CPF' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('cpf', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
          <TextInput
          value ={props.values.password} placeholder = 'Senha' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('password', text)}
          secureTextEntry = {true} style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
           <TextInput
          value ={props.values.cep} placeholder = 'CEP' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('cep', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />

          <TextInput
          value ={props.values.number} placeholder = 'Numero da Residência' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('numero', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
      
     <View style={[{ width: "70%", margin: 55}]}>
          <Button
             onPress={props.handleSubmit}
            title="Cadastrar"
            color="#a06df2"
          />
        </View> 
</View>
 </KeyboardAvoidingView>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27343e',
      width:'100%',
      height:'100%',
    
    },
    whiteContainer:{
      width:'90%',
      height:'90%',
      marginLeft: '5%',
      marginTop: '5%',
      borderWidth:2,
      borderColor: '#fff',
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'space-between',
    },
    circle:{
      width:80,
      height:80,
      borderRadius:100,
      backgroundColor: 'rgba(255,255,255, .6)', 
      marginTop: '3%',
      alignSelf: 'center'
    },
    formularios: {
        alignItems: 'center',
        width:'100%',
        marginBottom: '35%',
        marginTop: '5%'
      },
      homeScreenFilename: {
        marginVertical: 3,
      },
      codeHighlightContainer: {
        width: '80%',
        backgroundColor:'#fbfbfb',
        borderRadius: 1,
        paddingHorizontal: 4,
      },
      contentContainer: {
        paddingVertical: 5
      }
    });

export default withFormik({
  mapPropsToValues: () => ({ 
    name: '',
    email: '', 
    cpf:'',
    password: '',
    cep: '',
    numero: ''
   }),

  handleSubmit: () => {
    alert('Cadastrado com sucesso');
  }
})(Consumidor);;
