import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from './Input';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  componentDidMount() {

  }
  render() {
    console.log('asdasdasfasfasf')
    console.log(Input)
    return (
      <View>
        <Input errorMessage={'This field is required'}
          label={'Your Name'}
          placeholder={'Enter your Name'}
        />
        <Input label={'Date of Birth'}
          placeholder={'MM/DD/YYYY'}
        />
        <Input label={'Address'}
          placeholder={'Street 1'}
        />

      </View>
    );
  }
}

export default SignUpScreen;
