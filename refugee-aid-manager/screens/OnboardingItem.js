import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';


const App = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Text style={{ marginTop: 80, fontSize: 50, color: '#9491FF', fontWeight: 700 }}>RAM</Text>
            <View style={[styles.maal]}>
                <Image source={item.image} style={{ height: 300, width: '100%', marginTop: 90 }} />
                <Text style={{ marginTop: 30, justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: 30, color: '#9491FF', fontWeight: 600 }}>{item.title}</Text>
                <View style={[styles.text]}>
                    <Text style={{ marginTop: 20, fontSize: 20, color: '#9491FF' }}>{item.description}</Text>
                </View>
            </View>
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
    }
})