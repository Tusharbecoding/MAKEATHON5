import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/helper/Signin';
import { StyleSheet, Text, View } from 'react-native';
import Language from '../refugee-aid-manager/screens/Language'
import Choice from './screens/Choice';
import WelcomeHelper from './screens/helper/WelcomeHelper';
import WelcomeRefugee from './screens/refugee/WelcomeRefugee';
import RefugeeOnboard from '../refugee-aid-manager/screens/RefugeeOnboard'
import HelperOnboard from '../refugee-aid-manager/screens/HelperOnBoard'




const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{headerShown: false}} name="language" component={Language} />
          <Stack.Screen options={{headerShown: false}} name="choice" component={Choice} />
          <Stack.Screen options={{headerShown: false}} name="welcomehelper" component={WelcomeHelper} />
          <Stack.Screen options={{headerShown: false}} name="welcomerefugee" component={WelcomeRefugee} />
          <Stack.Screen options={{headerShown: false}} name="onboardingrefugee" component={RefugeeOnboard} />
          <Stack.Screen options={{headerShown: false}} name="onboardinghelper" component={HelperOnboard} />
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
