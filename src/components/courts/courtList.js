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
        address: '3753 18th St, San Francisco, CA 94114',
        rating: 5,
        isFavorite: true,
      }, {
        id: 2,
        name: 'Bay Club SF Tennis',
        imageURL: 'https://lh5.googleusercontent.com/p/AF1QipPtYb-GOaXeu1LbsHe1Ed8FISrYy3vtcl-TZcBn=w408-h306-k-no',
        address: '3753 18th St, San Francisco, CA 94114',
        rating: 5,
        isFavorite: true,
      }, {
        id: 3,
        name: 'Tennis court at Lafayette Park',
        imageURL: 'https://lh5.googleusercontent.com/p/AF1QipP_sTRzOdxQgcprjvZ1EetU1jZuEi-w6tke6bGS=w408-h306-k-no',
        address: '3753 18th St, San Francisco, CA 94114',
        rating: 3,
        isFavorite: true,
      }],
    };
  }

  render() {
    const { showCourtScreen } = this.props;
    return (
      <View>
        {this.state.courtList.map((court, idx) => {
          return (
            <CourtListEntry key={idx} court={court} showCourtScreen={showCourtScreen} />
          )
        })}
      </View>
    );
  }
}

export default CourtList;
