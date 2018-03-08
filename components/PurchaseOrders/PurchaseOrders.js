import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native';

export default class PurchaseOrders extends Component{

    static navigationOptions = ({navigation}) => {
        return  (
            {
                title  : 'Purchase Orders',
                headerRight : (
                    <TouchableOpacity>
                        <Text>Search...</Text>
                    </TouchableOpacity>
                )
            }
        )
    }

  render(){
      return (
          <View>
              <Text>PurchaseOrders</Text>
          </View>
      );
  }  
};