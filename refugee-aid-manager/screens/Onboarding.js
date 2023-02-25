import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import slides from './slides'
import OnboardingItem from './OnboardingItem'


const App = () => {
  return (
    <View style={styles.container}>
      <FlatList data={slides} renderItem={({item})=><OnboardingItem item={item}/>} horizontal showsHorizontalScrollIndicator pagingEnabled bounces={false}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue',
    height:'100%',
}
})