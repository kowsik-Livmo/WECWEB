import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for the navigation and route parameters
type RootStackParamList = {
  BeneficiaryDetailsScreen: { newBeneficiary: Beneficiary; isEditing: boolean };
  AddBeneficiaryScreen: { beneficiary?: Beneficiary; isEditing: boolean } | undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'AddBeneficiaryScreen'>;

// Define the Beneficiary type
interface Beneficiary {
  id: string;
  name: string;
  mobile: string;
  history: string;
}

const AddBeneficiaryScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>(); // Correct way to use navigation

  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [history, setHistory] = useState<string>('');

  // Handle Save or Update
  const handleSave = () => {
    const newBeneficiary: Beneficiary = {
      id: Date.now().toString(), // Assign a unique id
      name,
      mobile,
      history,
    };

    // Navigate back with the new beneficiary data
    navigation.navigate('BeneficiaryDetailsScreen', { newBeneficiary, isEditing: false });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Beneficiary Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Beneficiary Mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Medical History"
        value={history}
        onChangeText={setHistory}
      />
      <Button title="Save Beneficiary" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 10 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
});

export default AddBeneficiaryScreen;
