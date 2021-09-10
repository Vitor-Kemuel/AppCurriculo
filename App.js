import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './img/perfil_image.jpg'

export default function App() {

  function handleSocialLink(social){
    switch(social){
      case "github":
        Alert.alert('Meu GitHub: github/vitor-kemuel')
      break;

      case "linkedin":
        Alert.alert('Meu LinkedIn: linkedin.com/in/vitor-kemuel-965b801bb/')
      break;
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.cabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>Vitor Kemuel</Text>
        <Text styles={styles.funcao}>Graduando ADS (4/6)</Text>
        <View style={styles.social}>
          <TouchableOpacity onPress={() => handleSocialLink('github')}>
          <Icon name="github" size={30} />
            </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLink('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bory}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.card_title}>Formação</Text>
          </View>
          <View style={styles.card_content}>
            <Text style={styles.info}>
              Tecnologia em analise e desenvolvimento de sistemas{"\n"}
              <Text style={styles.subinfo}>FATEC Rio Preto - Cursando 4ºPeriodo.</Text>
            </Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55
  },
  nome:{
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 15
  },
  funcao: {
    color: '#939390',
    marginBottom: 0
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginTop: 20
  },
  bory:{
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '90%',
    borderRadius:5,
    borderWidth: 3,
    borderColor: '#808080',
    alignItems:'center',
    padding: 10,
    backgroundColor: '#ffff',
  },
  card_title:{
    fontWeight: 'bold',
    fontSize: 25,
  },
  card_content:{
  },
  info:{
    color: '#000',
    fontSize: 17
  },
  subinfo:{
    color: '#939393'
  }
});
