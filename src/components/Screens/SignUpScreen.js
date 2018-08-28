import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from './Input';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const NTPRratings = [
  { name: 'NTRP 1.0', value: 1, },
  { name: 'NTRP 1.5', value: 1.5, },
  { name: 'NTRP 2.0', value: 2, },
  { name: 'NTRP 2.5', value: 2.5, },
  { name: 'NTRP 3.0', value: 3, },
  { name: 'NTRP 3.5', value: 3.5, },
  { name: 'NTRP 4.0', value: 4, },
  { name: 'NTRP 4.5', value: 4.5, },
  { name: 'NTRP 5.0', value: 5, },
  { name: 'NTRP 5.5', value: 5.5, },
];

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      langauge:'js',
    };
  }

  componentDidMount() {

  }
  generateUser() {
    return {
      id: 1,
      name: 'Shane Yuan',
      rating: 4,
    }
  }
  render() {
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
        <Picker
          selectedValue={this.state.rating}
          style={{ height: 50, width: 1000, margin: 12 }}
          onValueChange={(itemValue, itemIndex) => this.setState({rating: itemValue})}>
          {NTPRratings.map((rating, idx) => {
            return (
              <Picker.Item key={idx} label={rating.name} value={rating.value} />
            )
          })}
        </Picker>
        <Button
          title="Sign Up"
          onPress={() => {
            const user = this.generateUser();
            this.props.navigation.navigate('Home', { user })
          }}
        />
      </View>
    );
  }
}

export default SignUpScreen;
