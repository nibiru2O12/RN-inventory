import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Requests from './components/Requests/Requests';
import PurchaseOrders from './components/PurchaseOrders/PurchaseOrders';
import Deliveries from './components/Deliveries/Deliveries';
import Suppliers from './components/Suppliers/Suppliers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#f4f3ed"
  },
});

const RootStack = StackNavigator(
  {
    home : {screen : Home},
    inventory : {screen : Inventory},
    requests : {screen : Requests},
    purchaseOrders : {screen : PurchaseOrders},
    deliveries : {screen : Deliveries},
    suppliers : {screen : Suppliers}
  },{
    initialRouteName : 'home',
    navigationOptions : {
      headerStyle : {backgroundColor : "#8190A5"},
      headerTintColor : "#fff"
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

