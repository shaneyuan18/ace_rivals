/** @format */

import {
    AppRegistry,
    StyleSheet,
    Component,
    Text,
    View,
    Navigator,
    TouchableOpacity,
} from 'react-native';
import {name as appName} from './app.json';

import Config from './src/config';
// import App from './src/App';
import { StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator(Config.navigation);
AppRegistry.registerComponent(appName, () => AppNavigator);
// AppRegistry.registerComponent(appName, () => App);
