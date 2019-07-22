/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {altura: 0, massa: 0, resultado: 0, resultadoText: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){

    let imc = this.state.massa / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc

    s.resultadoText = imc > 40 ? 'Obesidade Grau III' : imc > 35 ? 'Obesidade Grau II' :
      imc > 30 ? 'Obesidade Grau I' : imc > 25 ? 'Sobrepeso' : imc > 18.5 ? 'Peso normal' :
      imc < 18.5 ? 'Abaixo do peso' : 'Valor Incorreto'

    this.setState(s)    
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa) =>{this.setState({massa})}}/>
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) =>{this.setState({altura})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 40}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#F5FCFF',
 },
 input: {
   height: 80,
   width: "50%",
   textAlign: "center",
   fontSize: 50,
   color: 'lightslategrey',
   marginTop: 24,
 },
 entradas: {
  flexDirection: "row",
 },
 button : {
  backgroundColor: '#008151'
 },
 buttonText: {
   alignSelf: "center",
   padding: 30,
   fontSize: 30,
   color: '#FFF',
   fontWeight: "bold"
 },
 resultado: {
   alignSelf: "center",
   color: "lightslategrey",
   fontSize: 50,
   padding: 15
 }
});
