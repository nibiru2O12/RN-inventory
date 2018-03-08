import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native';

export default class Deliveries extends Component{

    static navigationOptions = ({navigation}) => {
        return  (
            {
                title  : 'Deliveries',
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
              <Text>Deliveries</Text>
          </View>
      );
  }  
};