import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import up from '../../assets/up.png';
import down from '../../assets/down.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const transaction = route.params.transaction;

  function setArrow(transaction) {
    if (transaction.credit == 0) {
      return down;
    } else {
      return up;
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.title}>Detalhes da Operação</Text>

        <View style={styles.transactionsItems}>

          <View style={styles.item}>
            <View style={styles.columnItemLeft}>
              <Text style={styles.titleItem}>Status</Text>
              <Image style={styles.arrow} source={setArrow(transaction)} />
            </View>

            <View style={styles.columnItemRight}>
              <Text style={styles.titleItem}>Valor</Text>
              <Text style={styles.contentItem}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.value)}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.columnItemLeft}>
              <Text style={styles.titleItem}>Banco</Text>
              <Text style={styles.contentItem}>{transaction.name}</Text>
            </View>

            <View style={styles.columnItemRight}>
              <Text style={styles.titleItem}>Data</Text>
              <Text style={styles.contentItem}>{transaction.date}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.columnItemLeft}>
              <Text style={styles.titleItem}>Número da conta</Text>
              <Text style={styles.contentItem}>{transaction.account}</Text>
            </View>

            <View style={styles.columnItemRight}>
              <Text style={styles.titleItem}>Agência</Text>
              <Text style={styles.contentItem}>{transaction.agency}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.columnItemLeft}>
              <Text style={styles.titleItem}>Descrição</Text>
              <Text style={styles.contentItem}>{transaction.description}</Text>
            </View>
          </View>

        </View>

      </View>
    </View>
  )
};