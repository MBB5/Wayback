import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 return (
   <View>
   <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="gray"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="gray"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<Button>✅</Button>
</View>

 );
}

const styles = StyleSheet.create ({
    inputView: {
        backgroundColor: "#FFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
})
export default Connexion();