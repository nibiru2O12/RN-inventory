import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native';

export default class Requests extends Component{

    static navigationOptions = ({navigation}) => {
        return  (
            {
                title  : 'Requests',
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
              <Text>Requests</Text>
          </View>
      );
  }  
};