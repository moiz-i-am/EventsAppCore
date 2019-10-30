import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import * as firebaseAPI from '../firebaseAuths/firebaseAPI';
import MainTabNavigator from './../navigation/MainTabNavigator';

export default class Signup extends Component {

  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
      newpassword: '',
    }
  }

  // static navigationOptions = {
  //   headerRight: () => (
  //     <Button
  //       onPress={() => this.props.navigation.navigate('Login')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  // }

  validateEmail = (email) => {
    var re = /.+@(mit)\.edu$/;
      return re.test(email);
  };

  submit() {
    if (this.state.email != '') {
      //Check for the Name TextInput
      if (this.state.password != '') {
      if (!this.validateEmail(this.state.email)) {
        alert("Please use email with mit domain");
      } else {
        firebaseAPI.createUser(this.state.email, this.state.password)
        this.props.navigation.navigate(<MainTabNavigator/>)
      }
    } else {
      alert('Please Enter Email');
    }
  } else {
    alert('Please Enter Name');
  }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={{ alignSelf: "flex-start", fontWeight: "bold", fontSize: 24, paddingLeft: 20 }}>Sign Up</Text>

        <TextInput style={styles.textInputStyle}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={(email) => this.setState({ email })} />

        <TextInput style={styles.textInputStyle}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(password) => this.setState({ password })} />

        <TextInput style={styles.textInputStyle}
          placeholder="Confirm Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(newpassword) => this.setState({ newpassword })} />

        <Text style={styles.button} onPress={() => this.submit()}>Sign up</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textInputStyle: {
    paddingLeft: 18,
    padding: 18,
    height: 56,
    width: '90%',
    borderWidth: 1,
    borderColor: '#007ACC',
    borderRadius: 15,
    marginTop: 20
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