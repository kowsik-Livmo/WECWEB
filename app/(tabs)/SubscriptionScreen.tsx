import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define your RootStackParamList
type RootStackParamList = {
  SubscriptionScreen: { totalPrice: number; beneficiaryCount: number };
  BeneficiaryDetailsScreen: undefined;
};

// Define the navigation type for your root stack
type SubscriptionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SubscriptionScreen'>;
type SubscriptionScreenRouteProp = RouteProp<RootStackParamList, 'SubscriptionScreen'>;

interface RouteParams {
  totalPrice?: number;  // Marked as optional with fallback value
  beneficiaryCount?: number;  // Marked as optional with fallback value
}

const SubscriptionScreen: React.FC = () => {
  const route = useRoute<SubscriptionScreenRouteProp>();
  const navigation = useNavigation<SubscriptionScreenNavigationProp>();

  // Add safe fallback in case params are not passed correctly
  const { totalPrice = 0, beneficiaryCount = 0 } = route.params as RouteParams || {};

  // Function to navigate back to BeneficiaryDetailsScreen
  const navigateToBeneficiaryDetails = () => {
    navigation.navigate('BeneficiaryDetailsScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.packageCard}>
        <Text style={styles.packageTitle}>Select Beneficiary</Text>

        {/* Make the "Selected Beneficiaries" link clickable */}
        <TouchableOpacity onPress={navigateToBeneficiaryDetails}>
          <Text style={styles.linkText}>Selected Beneficiaries: {beneficiaryCount}</Text>
        </TouchableOpacity>

        {/* Display the total price */}
        <Text style={styles.priceText}>${totalPrice}</Text>

        {/* Payment buttons */}
        <Button title="Pay with PayPal" onPress={() => alert('PayPal payment')} />
        <Button title="Pay Later" onPress={() => alert('Pay Later selected')} />
        <Button title="Debit or Credit Card" onPress={() => alert('Debit or Credit card payment')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 10 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  packageCard: { padding: 20, marginBottom: 20, borderWidth: 1, borderColor: '#ddd', borderRadius: 10 },
  packageTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  priceText: { fontSize: 28, fontWeight: 'bold', marginTop: 20, marginBottom: 20 },
  linkText: { fontSize: 16, color: 'blue', textDecorationLine: 'underline', marginTop: 10 },
});

export default SubscriptionScreen;
