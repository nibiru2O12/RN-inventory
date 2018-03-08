import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native';

import globalCss from '../../styles/styles';

import FloatingButton from '../UI/FloatingButton/FloatingButton';

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
          <View style={globalCss.container}>
              <FloatingButton />
          </View>
      );
  }  
};
