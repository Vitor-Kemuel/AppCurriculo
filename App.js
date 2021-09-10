import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './img/perfil_image.jpg'

import Card from './components/Card';

export default function App() {

  function handleSocialLink(social){
    switch(social){
      case "github":
        Alert.alert('Meu GitHub: github.com/vitor-kemuel')
      break;

      case "linkedin":
        Alert.alert('Meu LinkedIn: linkedin.com/in/vitor-kemuel-965b801bb/')
      break;
    }
  }

  return (
    <ScrollView style={styles.page}>
      <View style={styles.cabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>Vitor Kemuel</Text>
        <Text styles={styles.funcao}>Graduando ADS (4/6)</Text>
        <View style={styles.social}>
          <TouchableOpacity onPress={() => handleSocialLink('github')}>
            <View style={styles.social_icon}>
              <Icon name="github" size={30} />
              <Text>Vitor-Kemuel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLink('linkedin')}>
            <View style={styles.social_icon}>
              <Icon name="linkedin" size={30} />
              <Text>Vitor-Kemuel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bory}>

        <Card titulo="Formação">
          <Text style={styles.info}>
            Tecnologia em analise e desenvolvimento de sistemas
            <Text style={styles.subinfo}>{"\n"}FATEC Rio Preto - Cursando 4ºPeriodo</Text>
          </Text>
        </Card>

        <Card titulo="Habilidades">
          <Text style={styles.info}>
            Back-End
            <Text style={styles.subinfo}>{"\n"}PHP</Text>
            <Text style={styles.subinfo}>{"\n"}Python</Text>
            <Text style={styles.subinfo}>{"\n"}JavaScript</Text>
          </Text>
          <Text style={styles.info}>
            {"\n"}Front-End
            <Text style={styles.subinfo}>{"\n"}HTML 5</Text>
            <Text style={styles.subinfo}>{"\n"}CSS 3</Text>
            <Text style={styles.subinfo}>{"\n"}React Native</Text>
          </Text>
        </Card>

      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
    width: '50%',
    alignItems: 'center',
    marginTop: 20,
  },
  social_icon:{
    alignItems: 'center'
  },
  bory:{
    alignItems: 'center',
    marginTop: 20,
  },
  info:{
    color: '#000',
    fontSize: 17,
    
  },
  subinfo:{
    color: '#939393',
  },
});
