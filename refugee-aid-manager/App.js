import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Onboarding from './screens/Onboarding';
import Language from '../refugee-aid-manager/screens/Language'


const App = () => {
  return (
    <View style={styles.container}>
      <Onboarding/>
      {/* <Language/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    // width:'100%',
}
})