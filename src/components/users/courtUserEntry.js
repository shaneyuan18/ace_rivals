import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CourtUserEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { user, rank } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.rankText}>{rank}</Text>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: user.imageURL}}
          />
        </View>
        <View>
          <Text>Name: {user.name}</Text>
          <Text>Rating: {user.NRTPrating}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },
  rankText: {
    fontSize: 40,
    fontFamily: 'monospace',
    marginLeft: 10,
    marginRight: 5,
  },
  outerContainer: {
    // backgroundColor: '#476DC5',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 25,
  },
});

export default CourtUserEntry;
