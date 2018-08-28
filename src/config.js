import HomeScreen from "./components/Screens/HomeScreen";
import SettingsScreen from "./components/Screens/SettingsScreen";
import SplashScreen from "./components/Screens/SplashScreen";
import SignUpScreen from './components/Screens/SignUpScreen';
import CourtScreen from './components/Screens/CourtScreen';

const Config = {
  navigation: {
    Splash: {
      screen: SplashScreen,
      navigationOptions: { header: null },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: { header: null },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: null },
    },
    Settings: {
      screen: SettingsScreen,
    },
    Court: {
      screen: CourtScreen,
    },
  }
}

export default Config;