import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { FormInput } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  componentDidMount() {

  }
  render() {
    return (
      <View>
        <FormInput
          placeholder='Name'
        />
        <FormLabel>Name</FormLabel>
        <FormInput placeholder='Name'/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        <FormLabel>Birthday</FormLabel>
        <FormInput placeholder='MM/DD/YYYY'/>
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
        <FormLabel>Address</FormLabel>
        <FormInput placeholder='# street'/>
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}

        {/* <FormInput
          placeholder='BASIC INPUT'
        /> */}

        {/* <Button
          title="Sign Up!!!"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
      </View>
    );
  }
}
export default SignUpScreen;
