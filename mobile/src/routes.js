import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Menu from './pages/Menu';
import Transactions from './pages/Transactions';
import Detail from './pages/Detail';
import Credit from './pages/Credit';
import Debit from './pages/Debit';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="Transactions" component={Transactions} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Credit" component={Credit} />
        <AppStack.Screen name="Debit" component={Debit} />
      </AppStack.Navigator>
    </NavigationContainer>

  );
}