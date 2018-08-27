import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import SplashScreen from "./SplashScreen";
import SignUpScreen from './SignUpScreen';

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
    }
  }
}

export default Config;