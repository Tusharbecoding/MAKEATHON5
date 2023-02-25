import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/helper/Signin';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding';
import Language from '../refugee-aid-manager/screens/Language'




const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{headerShown: false}} name="language" component={Language} />
          <Stack.Screen options={{headerShown: false}} name="onboarding" component={Onboarding} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    // flex:1,
    
    height:'100%',
    // width:'100%',
}
})
