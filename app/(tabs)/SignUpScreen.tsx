import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation stack parameters
type RootStackParamList = {
  LoginScreen: undefined; // No params expected for LoginScreen
  SignUpScreen: undefined;
};

// Use typed navigation prop
type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation<SignUpScreenProp>(); // Correctly typed navigation

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Registration successful");
    navigation.navigate('LoginScreen'); // Navigate to LoginScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Mobile Number" value={mobileNumber} onChangeText={setMobileNumber} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      
      <Button title="Register" onPress={handleRegister} />

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
  loginText: { textAlign: 'center', marginTop: 20, color: 'blue' },
});

export default SignUpScreen;
