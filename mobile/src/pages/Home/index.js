import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateToMenu() {
    navigation.navigate('Menu');

  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Attraction Invest</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToMenu}>
          <Text style={styles.textButton}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  )
}