import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PackageDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.packageCard}>
        <Text style={styles.packageTitle}>ESSENTIAL HEALTH CARE</Text>
        <Text style={styles.beneficiaryText}>Each Beneficiary:</Text>
        <Text style={styles.priceText}>1 Month - $49</Text>
        <Text>Personal visit to check vitals such as weight, blood pressure, heart rate.</Text>
        <Text>Rechecking of previous illnesses and providing advice.</Text>
        <Text>Twice monthly visits.</Text>
        <Text>Suggestions for blood tests.</Text>
      </View>

      <View style={styles.packageCard}>
        <Text style={styles.packageTitle}>TOTAL WELLNESS CARE</Text>
        <Text style={styles.beneficiaryText}>Each Beneficiary:</Text>
        <Text style={styles.priceText}>1 Month - $99</Text>
        <Text>Includes everything in the Essential Health Care Plan.</Text>
        <Text>Basic blood tests like CBC, urine routine, RFT, RBS.</Text>
        <Text>Monthly or as desired frequency for tests.</Text>
        <Text>Direct consultation with a doctor.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 10 },
  packageCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  packageTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  beneficiaryText: { fontWeight: 'bold', marginBottom: 5 },
  priceText: { fontWeight: 'bold', marginBottom: 10 },
});

export default PackageDetailsScreen;