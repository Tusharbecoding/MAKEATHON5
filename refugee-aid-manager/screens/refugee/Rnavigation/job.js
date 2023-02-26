import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>JOB</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'lightblue',
    color:'#9491FF',
    width:'100%',
  },
  textContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  forwardArrow:{
    display:'flex',
    position:'absolute',
    padding:20,
    right:0,
    top:0,
  }
})