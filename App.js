// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAC8wE-FYiTKdAeCZlETJQnofjZ102JaqI",
    authDomain: "helloworld-c4437.firebaseapp.com",
    databaseURL: "https://helloworld-c4437.firebaseio.com",
    projectId: "helloworld-c4437",
    storageBucket: "helloworld-c4437.appspot.com",
    messagingSenderId: "205978830737",
    appId: "1:205978830737:web:ac52c7906bc8bbbc263c30"
  };

  firebase.initializeApp(firebaseConfig);

export default function App(props) {
  
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );

 }





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
