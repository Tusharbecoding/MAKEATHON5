import { StyleSheet, Text, View, Image, useWindowDimensions,Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <Text style={{ marginTop: 10, fontSize: 50, color: '#9491FF', fontWeight: 700 }}>RAM</Text>
            <View style={[styles.maal]}>
                <Image source={require('../assets/helper.png')} style={{ height: 300, width: '100%', marginTop: 90 }} />
                <Text style={{ marginTop: 30, justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: 30, color: '#9491FF', fontWeight: 600 }}>Refugee</Text>
                <View style={[styles.text]}>
                    <Text style={{ marginTop: 20, fontSize: 20, color: '#9491FF' }}>Aid refugees using our completely safe platform for crowdfunding using blockchain</Text>
                </View>
            </View>
            <View style={{marginTop:20}}>
            <Button title="GET STARTED" padding="20" onPress={() =>
                navigation.navigate('choice')
                }></Button>
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