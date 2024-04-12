import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageScreen = () => {
  return (
    <View style={styles.image}>
        <Image source={require('../../assets/login.jpg')}></Image>
    </View>
  )
}
const styles=StyleSheet.create({
    image:{
        width:100,
        height:500
    },
})

export default ImageScreen