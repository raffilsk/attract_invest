import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Menu() {
  const navigation = useNavigation();

  function handleNavigateToCredit() {
    navigation.navigate('Credit');
  }
  function handleNavigateToDebit() {
    navigation.navigate('Debit');
  }
  function handleNavigateToTransactions() {
    navigation.navigate('Transactions');
  }
  return (
    <View style={styles.container}>


      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Attraction Invest</Text>
      </View>

      <View style={styles.footer}>

        <RectButton style={[styles.button, styles.borderGreen]} onPress={handleNavigateToCredit}>
          <Text style={[styles.textButton, styles.colorGreen]}>Investir</Text>
        </RectButton>

        <RectButton style={[styles.button, styles.borderRed]} onPress={handleNavigateToDebit}>
          <Text style={[styles.textButton, styles.colorRed]}>Resgatar</Text>
        </RectButton>

        <RectButton style={[styles.button, styles.borderBlue]} onPress={handleNavigateToTransactions}>
          <Text style={[styles.textButton, styles.colorBlue]}>Histórico</Text>
        </RectButton>

      </View>

    </View>
  )
}