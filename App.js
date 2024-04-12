import { Image, StyleSheet, Text,SafeAreaView,Platform,StatusBar,View, Dimensions} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks'
import AppText from './components/AppText';
import AppButton from './components/AppText/AppButton';
import WelcomeScreen from './components/AppText/WelcomeScreen';
export default function App() {
  return (
      <WelcomeScreen></WelcomeScreen>
  );
}
 