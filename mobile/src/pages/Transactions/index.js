import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Header from '../../components/Header';

import up from '../../assets/up.png';
import down from '../../assets/down.png';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState([]);
  const navigation = useNavigation();

  function navigateToDetail(transaction) {
    navigation.navigate('Detail', { transaction })
  }

  async function loadTransactions() {
    const response = await api.get('transactions');
    const view = await api.get('total');

    setTransactions(response.data);
    setTotal(view.data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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
        <Text style={styles.title}>Histórico</Text>

        <FlatList
          data={transactions}
          style={styles.transactionsList}
          keyExtractor={transaction => String(transaction.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: transaction }) => (
            <TouchableOpacity
              style={styles.detail}
              onPress={() => navigateToDetail(transaction)}
            >

              <View style={styles.transactionsItem}>
                <Image style={styles.arrow} source={setArrow(transaction)} />
                <View>
                  <Text style={styles.descriptionItem}>{transaction.description}</Text>
                  <Text style={styles.dateItem}>{transaction.date}</Text>
                </View>
                <Text style={styles.valueItem}>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.value)}
                </Text>
              </View>

            </TouchableOpacity>
          )}
        />

      </View>
      <View style={styles.footer}>
        <Text style={styles.textTotal} >{total.map(item => (
          Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.total)
        ))}</Text>
      </View>
    </View>
  );
};