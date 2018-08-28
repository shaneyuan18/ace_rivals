import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Image} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from './Input';
import CourtUsers from '../users/courtUsers';

const users = [{
  id: 2,
  name: 'Mario Mario',
  imageURL: 'https://ih1.redbubble.net/image.554418697.5745/flat,800x800,070,f.u6.jpg',
  NRTPrating: 4.5,
  isFavorite: true,
}, {
  id: 3,
  name: 'Luigi Mario',
  imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/s--XqLuySZk--/c_scale,f_auto,fl_progressive,q_80,w_800/xqf4y4m3fxcyzgdkxgdg.jpg',
  NRTPrating: 4.5,
  isFavorite: true,
}, {
  id: 4,
  name: 'Waluigi',
  imageURL: 'https://nintendoeverything.com/wp-content/uploads/mario-tennis-aces-9-656x369.jpg',
  NRTPrating: 5,
  isFavorite: true,
},{
  id: 5,
  name: 'Donkey Kong',
  imageURL: 'http://www.gamerassaultweekly.com/wp-content/uploads/2018/04/tumblr_inline_p737vstJIk1uftrnv_1280.png',
  NRTPrating: 3.5,
  isFavorite: true,
}];

class CourtScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('court', 'A Nested Details Screen').name,
      headerTitleStyle: {textAlign:'center', alignSelf:'center', flex:1, marginLeft: -20},
    };
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const court = this.props.navigation.getParam('court', 'Error Not found');
    return (
      <View>
        <View>
          <Image
            style={{width: '100%', height: 200}}
            source={{uri: court.imageURL}}
          />
        </View>
        <View>
          <View>
            <Text>Address</Text>
            <Text>{court.address}</Text>
          </View>
          <View>
            <CourtUsers users={users}/>
          </View>
        </View>
      </View>
    );
  }
}

export default CourtScreen;
