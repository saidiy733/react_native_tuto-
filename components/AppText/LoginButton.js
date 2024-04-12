import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../config/colors';

const AppButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:colors.pink,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        marginBottom:12,
        width:'100%'
    },
    text:{
        color:colors.black,
        fontSize:18,
        textTransform:'uppercase',
    }
})

export default AppButton