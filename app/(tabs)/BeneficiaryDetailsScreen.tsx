import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker'; // Correct import

// Define your beneficiary interface
interface Beneficiary {
  id: string;
  name: string;
  mobile: string;
  history: string;
  selectedPlan: string;
  isSelected: boolean;
}

// Define your RootStackParamList
type RootStackParamList = {
  AddBeneficiaryScreen: { beneficiary?: Beneficiary; isEditing: boolean };
  SubscriptionScreen: { totalPrice: number; beneficiaryCount: number };
  BeneficiaryDetailsScreen: { newBeneficiary?: Beneficiary; isEditing: boolean };
};

// Define the types for route and navigation
type BeneficiaryDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BeneficiaryDetailsScreen'>;
type BeneficiaryDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BeneficiaryDetailsScreen'>;

const BeneficiaryDetailsScreen: React.FC = () => {
  const navigation = useNavigation<BeneficiaryDetailsScreenNavigationProp>();
  const route = useRoute<BeneficiaryDetailsScreenRouteProp>(); // Properly type the useRoute hook

  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { id: '1', name: 'John Doe', mobile: '092800 97973', history: 'Hypertension', selectedPlan: '199', isSelected: false },
    { id: '2', name: 'Jane Smith', mobile: '98765 43216', history: 'Diabetes', selectedPlan: '99', isSelected: false },
  ]);

  // Add new beneficiary if passed from AddBeneficiaryScreen
  useEffect(() => {
    if (route.params && route.params.newBeneficiary) {
      const newBeneficiary = route.params.newBeneficiary;
      setBeneficiaries((prevState) => [...prevState, newBeneficiary]);
    }
  }, [route.params]);

  // Function to handle plan selection for a specific beneficiary
  const handleSelectPlan = (id: string, selectedPlan: string) => {
    setBeneficiaries((prevState) =>
      prevState.map((beneficiary) =>
        beneficiary.id === id ? { ...beneficiary, selectedPlan } : beneficiary
      )
    );
  };

  // Function to handle selecting or deselecting a beneficiary
  const handleSelectBeneficiary = (id: string) => {
    setBeneficiaries((prevState) =>
      prevState.map((beneficiary) =>
        beneficiary.id === id ? { ...beneficiary, isSelected: !beneficiary.isSelected } : beneficiary
      )
    );
  };

  // Function to calculate total price based on selected beneficiaries
  const calculateTotalPrice = () => {
    return beneficiaries.reduce((total, beneficiary) => {
      if (beneficiary.isSelected && beneficiary.selectedPlan) {
        return total + parseInt(beneficiary.selectedPlan);
      }
      return total;
    }, 0);
  };

  // Function to get count of selected beneficiaries
  const selectedBeneficiaryCount = () => {
    return beneficiaries.filter(b => b.isSelected).length;
  };

  // Function to handle editing a beneficiary
  const handleEditBeneficiary = (beneficiary: Beneficiary) => {
    navigation.navigate('AddBeneficiaryScreen', { beneficiary, isEditing: true });
  };

  // Function to delete a beneficiary
  const handleDeleteBeneficiary = (id: string) => {
    setBeneficiaries((prevState) => prevState.filter((beneficiary) => beneficiary.id !== id));
  };

  // Function to proceed to subscription page
  const handleProceedToSubscription = () => {
    const totalPrice = calculateTotalPrice();
    const beneficiaryCount = selectedBeneficiaryCount();
    navigation.navigate('SubscriptionScreen', { totalPrice, beneficiaryCount });
  };

  // Render function for beneficiaries list
  const renderItem = ({ item }: { item: Beneficiary }) => (
    <View style={styles.beneficiaryItem}>
      <View style={styles.beneficiaryDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.mobile}>{item.mobile}</Text>
        <Text style={styles.history}>{item.history}</Text>
      </View>

      {/* Dropdown for selecting a plan */}
      <Picker
        selectedValue={item.selectedPlan}
        style={styles.picker}
        onValueChange={(value: string) => handleSelectPlan(item.id, value)}
      >
        <Picker.Item label="Select Plan" value="" />
        <Picker.Item label="99 Plan" value="99" />
        <Picker.Item label="199 Plan" value="199" />
      </Picker>

      {/* Buttons for Edit, Delete, and Select */}
      <View style={styles.actions}>
        <Button title="Edit" color="blue" onPress={() => handleEditBeneficiary(item)} />
        <Button title="Delete" color="red" onPress={() => handleDeleteBeneficiary(item.id)} />
        <Button
          title={item.isSelected ? 'Unselect' : 'Select'}
          onPress={() => handleSelectBeneficiary(item.id)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={beneficiaries} keyExtractor={(item) => item.id} renderItem={renderItem} />

      {/* Button to add a new beneficiary */}
      <TouchableOpacity onPress={() => navigation.navigate('AddBeneficiaryScreen', { isEditing: false })} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Beneficiary</Text>
      </TouchableOpacity>

      {/* Button to proceed to subscription */}
      <TouchableOpacity onPress={handleProceedToSubscription} style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed to Subscription</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  beneficiaryItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  beneficiaryDetails: {
    marginBottom: 10,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  mobile: { color: '#555', marginBottom: 5 },
  history: { color: '#555' },
  picker: {
    height: 40,
    width: 150,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  proceedButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BeneficiaryDetailsScreen;
