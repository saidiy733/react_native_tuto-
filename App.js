import { Image, StyleSheet, Text,SafeAreaView,Platform,StatusBar,View, Dimensions} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks'
export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
    <Text> manage FlexBox </Text>
    <View style={{
      backgroundColor:'yellow',
      flex:2
      }}>
    </View> 
    <View style={{
      backgroundColor:'green',
      flex:1
      }}>
    </View> 
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop:Platform.OS==='android'? StatusBar.currentHeight:0,
  }
});
 