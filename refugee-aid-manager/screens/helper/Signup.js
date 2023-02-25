import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';


const Signin = () => {
  return (

    <View style={[styles.container]}>
      <View style={styles.backwardArrow}>
        <Icon name="arrowleft" size={40} color="#9491FF" />
      </View>
      <Text style={{ color: '#9491FF',marginTop:10,fontSize:50,fontWeight:700}}>RAM</Text>
      <Image source={require('../../assets/hands.png')} style={{height:320,width:320}}></Image>
      <Text style={{ color: '#9491FF',marginTop:-40,fontSize:30 }}>SignUp</Text>
      <View style={{marginTop:30,alignItems:'stretch',width:300}}>
      <TextInput placeholder='First Name' style={{padding:10, borderRadius:5,shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3}}></TextInput>
      <TextInput placeholder='Last Name' style={{padding:10, borderRadius:5,marginTop:10,marginBottom:30,shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3}}></TextInput>
     <TextInput placeholder='Email Id' style={{padding:10, borderRadius:5,shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3}}></TextInput>
      <TextInput placeholder='Password' style={{padding:10, borderRadius:5,marginTop:10,marginBottom:30,shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3}}></TextInput>
      </View>
      <View style={{width:300}}><Button title="SignIn" style={{width:200}}></Button></View>
      <View style={{marginTop:15}}>
      <Text>Don't have an account? <Text style={{color:'#9491FF'}}>Sign Up</Text></Text>
      </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FDFDBD',
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    flexDirection:'column'
  },
  backwardArrow: {
    display: 'flex',
    position: 'absolute',
    padding: 20,
    left: 0,
    top: 0,
  }
})