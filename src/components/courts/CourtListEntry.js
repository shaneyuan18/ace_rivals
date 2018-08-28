import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class CourtListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    const { court, showCourtScreen } = this.props;
    return (
      <View style={styles.outerContainer}>
        <TouchableOpacity 
          style={styles.container}
          onPress={() => {showCourtScreen(court)}}>
          <View>
            <Image
              style={{width: 150, height: 150}}
              source={{uri: court.imageURL}}
            />
          </View>
          <View>
            <Text>{court.name}</Text>
          </View>
        </TouchableOpacity>
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
  outerContainer: {
    // backgroundColor: '#476DC5',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 25,
  },
});

export default CourtListEntry;
