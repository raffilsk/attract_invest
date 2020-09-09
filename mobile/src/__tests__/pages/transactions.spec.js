import React from 'react';
import { render } from '@testing-library/react-native';

import Credit from '../../pages/Credit';
import Debit from '../../pages/Debit';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
})

describe('Credid page', () => {
  it('should contains decription/value inputs', () => {
    const { getByPlaceholderText } = render(<Credit />);

    expect(getByPlaceholderText('Descrição')).toBeTruthy();
    expect(getByPlaceholderText('Valor')).toBeTruthy();
  });
});

describe('Debit page', () => {
  it('should contains decription/value inputs', () => {
    const { getByPlaceholderText } = render(<Debit />);

    expect(getByPlaceholderText('Descrição')).toBeTruthy();
    expect(getByPlaceholderText('Valor')).toBeTruthy();
    expect()
  });
});