import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const FloatingButton = (props) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        
    );
}


const styles = StyleSheet.create({
    container : {
        position:"absolute",
        bottom : 15,
        right : 15,
        width : 50,
        height : 50,
        backgroundColor : "green",
        justifyContent : "center",
        borderRadius : 50,  
        alignItems : "center",
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        zIndex : 999
    },
    icon : {
        color : "white",
        fontSize : 30
    }
});

export default FloatingButton;