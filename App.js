import { Image, StyleSheet, Text,SafeAreaView,Platform,StatusBar,View, Dimensions} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks'
import AppText from './components/AppText';
export default function App() {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center", 
      }}> 
      <AppText>hi i love React Native !</AppText>
    </View>
  );
}
 