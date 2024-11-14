import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email or phone number"
      />

      <Button title="Send Reset Link" onPress={() => alert('Reset link sent')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
});

export default ForgotPasswordScreen;
