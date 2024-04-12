import { StatusBar } from "expo-status-bar";

const { StyleSheet, Platform } = require("react-native");

const styles = StyleSheet.create({
    text: {
      fontSize:18,
      paddingTop:Platform.OS==='android'? StatusBar.currentHeight:0,
  
    }
  });
  export default styles;
