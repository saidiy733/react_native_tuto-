import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageScreen from './ImageScreen'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

const WelcomeScreen = () => {
  return (
    <View>
    <ImageScreen/>
    <Text style={styles.text}>welcome To Login Page</Text>
    <LoginButton title="Login"></LoginButton>
    <RegisterButton title="Register"></RegisterButton>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
       justifyContent:'center',
       fontSize:22,
       alignItems:'center',
       marginLeft:50,
       marginBottom:40,
       color:'white'
        
    }
})

export default WelcomeScreen