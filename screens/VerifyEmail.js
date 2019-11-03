import React, { Component } from 'react';
import { Button, InteractionManager, View, Text, StyleSheet } from 'react-native';
import * as firebaseAPI from './../firebaseAuths/firebaseAPI';

export default class VerifyEmail extends Component {

    logout(navigation) {
        firebaseAPI.logoutUser()
    
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('Login')
        })
      }

    render() {
        return (
            <View style = {styles.container}>
                <Text>please verify your email from email inbox</Text>
                <Text style={styles.button} onPress={() => { this.logout(this.props.navigation) }}>Login to continue</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    button: {
        textAlign: 'center',
        marginHorizontal: 0,
        width: '90%',
        height: 56,
        padding: 15,
        backgroundColor: '#007ACC',
        borderRadius: 15,
        marginTop: 40,
        color:'#ffffff'
      },
});