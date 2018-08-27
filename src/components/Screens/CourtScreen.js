import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from './Input';

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
          {NTPRratings.map((rating) => {
            return (
              <Picker.Item label={rating.name} value={rating.value} />
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
