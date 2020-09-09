import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Header from '../../components/Header';
import styles from './styles';
import api from '../../services/api';
import * as Yup from 'yup';

export default function Credit() {
  const navigation = useNavigation();
  const formRef = useRef(null);


  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        description: Yup.string().required('Insira uma descrição.'),
        value: Yup.number().required('Insira uma valor'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      api.post('/credit', data);
      Alert.alert('Valor Creditado')
      navigation.goBack();

    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      Alert.alert(
        'Importante',
        'Preencha todos os campos',
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.title}>Investir</Text>

        <Form style={styles.form} ref={formRef} onSubmit={handleSubmit}>

          <Input
            style={styles.input}
            name="description"
            label="Descrição"
            placeholder="Descrição"
          />

          <Input
            style={styles.input}
            name="value"
            keyboardType="number-pad"
            label='Valor'
            placeholder="Valor"
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => formRef.current.submitForm()}
          >
            <Text style={styles.submitButtonText}>Investir</Text>
          </TouchableOpacity>

        </Form>
      </View>
    </View>
  );
};