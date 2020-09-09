import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Text, TextInput, StyleSheet } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onChangeText={value => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
    </>
  );
}
const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#EEE'
  }
});

export default Input;