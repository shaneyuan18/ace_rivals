import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CourtList from '../courts/CourtList';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }
  showCourtScreen(court) {
    this.props.navigation.navigate('Court', { court });
  }

  componentDidMount() {
    
  }
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header>
          <Icon
            name='user'
            color='white'
            size={20}
          />
          <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>Courts Around You</Text>
          <Icon
            name='comment'
            color='#fff'
            size={20}
          />
        </Header>
        <CourtList showCourtScreen={this.showCourtScreen.bind(this)}/>
      </View>
    );
  }
}

export default HomeScreen;
