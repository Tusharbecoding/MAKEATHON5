import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';


const App = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:40,fontWeight:700,color:'#9491FF'}}>RAM</Text>
        <Text style={{fontSize:30,fontWeight:400, color:'#9491FF'}}>(Refugee Aid Manager)</Text>
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
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue',
    color:'#9491FF',
    width:'100%',
}
})