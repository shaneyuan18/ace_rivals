/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
        style={{padding: 100}}
      />
    );
  }
  
  // render() {
  //   return (
  //     <Navigator
  //           initialRoute={{id: 'SplashPage', name: 'Index'}}
  //           renderScene={this.renderScene.bind(this)}
  //           configureScene={(route) => {
  //       if (route.sceneConfig) {
  //         return route.sceneConfig;
  //       }
  //       return Navigator.SceneConfigs.VerticalDownSwipeJump;
  //     }}/>
  //     <View style={{flex: 1, backgroundColor:'#fff'}}>
  //       <Header>
  //         <Icon
  //           name='user'
  //           type='font-awesome'
  //           color='red'
  //         />
  //         <Text style={styles.instructions}>My Title</Text>
  //         <Icon
  //           name='users'
  //           type='font-awesome'
  //           color='#fff'
  //         />
  //       </Header>
  //       <View style={styles.container}>
  //         <Text style={styles.welcome}>HELLOE to Hello Native!</Text>
  //         <Text style={styles.instructions}>To get started, edit App.js</Text>
  //         <Text style={styles.instructions}>{instructions}</Text>
  //       </View>
  //       <View style={styles.footer}>
  //         <View><Text>footer</Text></View>
  //       </View>
  //     </View>
  //   );
  // }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    backgroundColor: 'red',
    flex: 1,
  }
});
