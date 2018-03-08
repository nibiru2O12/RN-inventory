import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native';

export default class Suppliers extends Component{

    static navigationOptions = ({navigation}) => {
        return  (
            {
                title  : 'Suppliers',
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
              <Text>Suppliers</Text>
          </View>
      );
  }  
};