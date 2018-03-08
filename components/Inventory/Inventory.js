import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native';

export default class Inventory extends Component{

    static navigationOptions = ({navigation}) => {
        return  (
            {
                title  : 'Inventory',
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
              <Text>Inventory</Text>
          </View>
      );
  }  
};