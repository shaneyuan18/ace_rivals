import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

class HomeScreen extends React.Component {
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
        <Button
          title="Get Started!!!"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}
export default HomeScreen;
