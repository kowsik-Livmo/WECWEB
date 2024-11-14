import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Background from '../components/Background';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

// Define the navigation type for your stack
type RootStackParamList = {
  ForgotPasswordScreen: undefined;
  SignUpScreen: undefined;
  DashboardScreen: undefined;
};

// Define the navigation prop type using StackNavigationProp
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPasswordScreen'>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<{ value: string; error: string }>({ value: '', error: '' });
  const [password, setPassword] = useState<{ value: string; error: string }>({ value: '', error: '' });

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    // Basic validation
    if (!email.value) {
      setEmail({ ...email, error: 'Email is required.' });
      return;
    }
    if (!password.value) {
      setPassword({ ...password, error: 'Password is required.' });
      return;
    }

    navigation.navigate('DashboardScreen'); 
  };

  return (
    <Background>
      {/* Add the logo image here */}
      <Image source={require('./Logo.jpg')} style={styles.logo} />

      <Header>Sign Into Your Account</Header>

      <TextInput
        label="Email Address"
        placeholder="Email Address"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Button onPress={handleLogin}>Login</Button>

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>

        
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default memo(LoginScreen);
