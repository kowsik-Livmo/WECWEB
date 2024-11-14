import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PersonalDetailsScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const router = useRouter(); // Using the router from expo-router

  const handleSaveChanges = () => {
    // Navigate to AddBeneficiaryScreen
    router.push({
      pathname: '/AddBeneficiaryScreen',
      params: {
        beneficiary: JSON.stringify("beneficiary"), // Convert object to JSON string if it's an object
        isEditing: 'true', // Pass string values for query params
      },
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>

      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Mobile Number" value={mobile} onChangeText={setMobile} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Date of Birth" value={dob} onChangeText={setDob} />
      <TextInput style={styles.input} placeholder="Address Line 1" value={address1} onChangeText={setAddress1} />
      <TextInput style={styles.input} placeholder="Address Line 2" value={address2} onChangeText={setAddress2} />
      <TextInput style={styles.input} placeholder="Country" value={country} onChangeText={setCountry} />
      <TextInput style={styles.input} placeholder="State" value={state} onChangeText={setState} />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
      <TextInput style={styles.input} placeholder="Zip Code" value={zip} onChangeText={setZip} keyboardType="number-pad" />

      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
});

export default PersonalDetailsScreen;
