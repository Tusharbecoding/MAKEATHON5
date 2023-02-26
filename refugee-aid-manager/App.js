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
import RSignin from '../refugee-aid-manager/screens/refugee/Rsingin'
import Signup from '../refugee-aid-manager/screens/helper/Signup'
import RSignUp from '../refugee-aid-manager/screens/refugee/RSingup'
import MainContainer from '../refugee-aid-manager/screens/refugee/Rnavigation/maincontainer'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.container}>
  {/*<MainContainer/>*/}
      <NavigationContainer>
        <Stack.Navigator >
          
          <Stack.Screen options={{headerShown: false}} name="rsignin" component={RSignin} />
          
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
