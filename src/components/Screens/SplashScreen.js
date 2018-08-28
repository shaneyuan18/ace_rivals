import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  componentWillMount() {
    // var navigator = this.props.navigation;
    // setTimeout(() => {
    //   navigator.navigate('SignUp');
    // }, 3000);
  }

  render() {
    return (
      <View>
        <Text>Tennis GO</Text>
        <Button
          title="Find Your Rivals"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}
export default SplashScreen;
