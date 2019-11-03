import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import firebase from 'firebase'

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class Maps extends Component {


  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser.emailVerified === true) {
        this.render();
      }
      else{
        this.props.navigation.navigate('VerifyEmail');
      }
    })
  }

  render(){
     return(
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
     );
   } 
}

Maps.navigationOptions = {
  title: 'Map',
  headerTitleStyle: { 
    textAlign:"center", 
    flex:1,
},
};
