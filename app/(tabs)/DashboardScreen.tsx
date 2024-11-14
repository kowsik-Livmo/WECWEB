import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppHeader from './AppHeader'; // Import the header component
import AppFooter from './AppFooter'; // Import the footer component

type RootStackParamList = {
  PersonalDetailsScreen: undefined;
  PackageDetailsScreen: undefined;
  BeneficiaryDetailsScreen: undefined;
  SubscriptionScreen: undefined;
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Add App Header */}
      <AppHeader username="John Doe" lastLogin="10/18/2024" />

      {/* Main Content */}
      <View style={styles.content}>
        <Button title="Personal Details" onPress={() => navigation.navigate('PersonalDetailsScreen')} />
        <Button title="Package Details" onPress={() => navigation.navigate('PackageDetailsScreen')} />
        <Button title="Beneficiary Details" onPress={() => navigation.navigate('BeneficiaryDetailsScreen')} />
        <Button title="Subscription" onPress={() => navigation.navigate('SubscriptionScreen')} />
      </View>

      {/* Add App Footer */}
      <AppFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'space-between', 
    paddingHorizontal: 20 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default DashboardScreen;
