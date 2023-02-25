import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.forwardArrow}>
          <Icon name="arrowright" size={40} color="#9491FF" onPress={() =>
            navigation.navigate('choice')
          } />
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize:40,fontWeight:700,color:'#9491FF'}}>RAM</Text>
          <Text style={{fontSize:30,fontWeight:400, color:'#9491FF'}}>Refugee Aid Manager</Text>
        </View>
        <View>
            <View style={{top:300,alignItems:'center',justifyContent:'center'}}>
            <Button title="English(UK)"></Button>
            </View>
        </View>
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