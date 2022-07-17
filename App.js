
import { StyleSheet,  SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Connexion} from './components/Connexion';
import Navigation from './components/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name={"Connexion"} component={Connexion}/>
      <Stack.Screen name={"Research"} component={Navigation}/>
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
