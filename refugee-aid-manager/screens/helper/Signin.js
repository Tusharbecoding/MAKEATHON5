import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Signin = () => {
  return (
    <View style={{alignItems: 'center', flex:1}}>
      <Text style={{color: white, }}>Signin</Text>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#010101',
    },
})