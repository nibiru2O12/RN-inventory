import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';

import Card from '../UI/Cards/Card';

class Home extends Component {

    static navigationOptions = ({navigation}) => {
        return  (
            {
                title  : 'HOME'
            }
        )
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
                <Card header = "Inventory"
                        description ="Add, Edit and Manage Stocks"
                        navigate={()=>navigation.navigate('inventory')}/>
                <Card header = "Request"
                        description ="Material / Supplies Request"
                        navigate={()=>navigation.navigate('requests')}/>
                <Card header = "Purchase Order"
                        description ="Add, Edit and Manage Purchase Order"
                        navigate={()=>navigation.navigate('purchaseOrders')}/>
                <Card header = "Delivery"
                        description ="Add, Edit and Manage Deliverables of suppliers" 
                        navigate={()=>navigation.navigate('deliveries')}/>       
                <Card header = "Suppliers"
                        description ="Add, Edit and Manage Suppliers" 
                        navigate={()=>navigation.navigate('suppliers')}/>      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        display : "flex",
        flexDirection: 'column',
        backgroundColor : "#f4f3ed",
        justifyContent : "flex-start",
        padding : 10
    }
});

export default Home;