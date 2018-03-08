import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';


const Card = (props) => {
    console.log(props);
    return (
        <TouchableOpacity onPress={()=>props.navigate('inventory')}>
            <View style={styles.container}>
                <Text style ={styles.header}>{props.header}</Text>
                <Text style={styles.details}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        container : {
            backgroundColor : "#C0CCDA",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
        },
        header : {
            color : "#47525E",
            fontSize: 20,
            marginBottom : 5
        },
        details : {
            color : "#8492A6",
            fontSize: 15,
        }
    }
);

export default Card;