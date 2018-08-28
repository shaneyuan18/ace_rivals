import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CourtUserEntry from '../users/courtUserEntry';

class CourtUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { users } = this.props;
    console.log(users)
    const topUsers = users.slice(0, 3);
    return (
      <View>
        <View>
          <Text style={styles.topPlayerTitle}>Top Players</Text>
          {topUsers.map((user, idx) => {
            return (
              <CourtUserEntry user={user} rank={idx+1} key={idx} />
            )
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  topPlayerTitle: {
    fontSize: 30,
  },
});

export default CourtUsers;
