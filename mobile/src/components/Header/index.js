import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import logo from '../../assets/logoIcon.png';

export default function Headers() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack()
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.detail} onPress={navigateBack}>
        <Text style={styles.textUser}>Voltar</Text>
      </TouchableOpacity>
      <Image source={logo} />
    </View>
  )
}