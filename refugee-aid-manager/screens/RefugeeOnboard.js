import { StyleSheet, Text, View, Image, useWindowDimensions,Button } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const App = ({ navigation }) => {
    return (
        <View style={[styles.container]}>
            <Text style={{ marginTop: 40, fontSize: 50, color: '#9491FF', fontWeight: 700 }}>RAM</Text>
            <View style={[styles.maal]}>
                <Image source={require('../assets/refugee.png')} style={{ height: 300, width: '100%', marginTop: 90 }} />
                <Text style={{ marginTop: 30, justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: 30, color: '#9491FF', fontWeight: 600 }}>Refugee</Text>
                <View style={[styles.text]}>
                    <Text style={{ marginTop: 20, fontSize: 20, color: '#9491FF'}}>Get legal rights awareness, locate nearby refugee camps, locate refugee friendly AirBnbs and get information of refugee accepting organization for getting employed</Text>
                </View>
            </View>
            <Icon name="arrowright" size={40} color="#9491FF" onPress={() =>
            navigation.navigate('onboardinghelper')
            }/>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding:10,
        backgroundColor: 'lightblue',
        // height:'100%',
        // width:'100%',
    },
    maal: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    text: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 40,
        marginBottom:20
    }
})