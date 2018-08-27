import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: Boolean(props.errorMessage),
    };
  }
  disableError (event) {
    this.setState({
      displayError: !Boolean(event),
    })
  }
  render() {
    const {
      errorMessage,
      label,
      placeholder,
    } = this.props;
    const { displayError } = this.state;
    return (
      <View>
        {label &&
          <FormLabel>  
            {label}
          </FormLabel>
        }
        <FormInput placeholder={placeholder} onChangeText={this.disableError.bind(this)} />
        {displayError &&
          <FormValidationMessage>
            {errorMessage}
          </FormValidationMessage>
        }
      </View>
    );
  }
}

export default Input;
