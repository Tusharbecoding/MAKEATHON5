import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useFonts } from 'expo-font';



const Signin = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Nerko One': require('../../assets/NerkoOne-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Icon name="arrowleft" size={40} color="#9491FF" onPress={() =>
        navigation.navigate('language')
        } />
        <Text style={styles.title}>RAM</Text>
        <Text>      </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/jhund.png')} style={styles.image}></Image>        
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign In</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() =>
            navigation.navigate('welcomerefugee')
            }>
            <Text style={styles.textButton}>Refugee</Text>
        </Pressable>
        <Pressable style={styles.buttonInset} onPress={() =>
            navigation.navigate('welcomehelper')
            }>
            <Text style={styles.textButton}>Helper</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#FDFDBD',
      color:'#9491FF',
      width:'100%',
  },
  navbar: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:20,
      height:100,
  },
  title: {
      fontSize:38,
      fontFamily:'Nerko One',
      color:'#9491FF',
  },
  imageContainer: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:30,
  },
  image: {
      width:220,
      height:280,
  },
  textContainer: {
      paddingTop:40,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
  },
  text: {
      fontSize:36,
      fontWeight: '500',
      color: '#9491FF',
  },
  buttonContainer: {
      paddingTop: 80,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap: 50,
  },
  button: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: '#FDFDBD',
      width: 350,
      boxShadow: '-3px 3px 6px rgba(206, 206, 157, 0.2), 3px -3px 6px rgba(206, 206, 157, 0.2), -3px -3px 6px rgba(255, 255, 221, 0.9), 3px 3px 8px rgba(206, 206, 157, 0.9), inset 1px 1px 2px rgba(255, 255, 221, 0.3), inset -1px -1px 2px rgba(206, 206, 157, 0.5)',
  },
  buttonInset: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: '#FDFDBD',
      width: 350,
      boxShadow: '1px 1px 2px rgba(255, 255, 221, 0.3), -1px -1px 2px rgba(210, 210, 157, 0.5), inset -3px 3px 6px rgba(210, 210, 157, 0.2), inset 3px -3px 6px rgba(210, 210, 157, 0.2), inset -3px -3px 6px rgba(255, 255, 221, 0.9), inset 3px 3px 8px rgba(210, 210, 157, 0.9)',
  },
  textButton: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#9491FF',
  },
})