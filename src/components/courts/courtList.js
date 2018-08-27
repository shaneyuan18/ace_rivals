import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CourtListEntry from './CourtListEntry';
class CourtList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courtList: [{
        id: 1,
        name: 'Dolores Park',
        imageURL: 'https://mastersystemscourts.com/img/master-systems-courts-tennis-court-1-991x605l.jpg',
        rating: 5,
        isFavorite: true,
      }, {
        id: 1,
        name: 'Dolores Park',
        imageURL: 'https://mastersystemscourts.com/img/master-systems-courts-tennis-court-1-991x605l.jpg',
        rating: 5,
        isFavorite: true,
      }, {
        id: 1,
        name: 'Dolores Park',
        imageURL: 'https://mastersystemscourts.com/img/master-systems-courts-tennis-court-1-991x605l.jpg',
        rating: 5,
        isFavorite: true,
      }],
    };
  }

  render() {
    console.log('safuigqwuyfgqwyufguqywgf')
    console.log(this.props)
    return (
      <View>
        {this.state.courtList.map((court, idx) => {
          return (
            <CourtListEntry court={court} />
          )
        })}
      </View>
    );
  }
}

export default CourtList;
