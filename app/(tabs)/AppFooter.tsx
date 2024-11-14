import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';  // Updated import

// Define the navigation type for your root stack
type RootStackParamList = {
  PackageDetailsScreen: undefined;
  BeneficiaryDetailsScreen: undefined;
  ContactUsScreen: undefined;
};

const AppFooter: React.FC = () => {
  // Specify the type for the navigation prop
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footer}>
      {/* Package Details Button */}
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('PackageDetailsScreen')}>
        <MaterialIcons name="local-shipping" size={24} color="black" />
        <Text style={styles.footerText}>Package Details</Text>
      </TouchableOpacity>

      {/* Beneficiary Details Button */}
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('BeneficiaryDetailsScreen')}>
        <MaterialIcons name="account-circle" size={24} color="black" />
        <Text style={styles.footerText}>Beneficiary Details</Text>
      </TouchableOpacity>

      {/* Contact Us Button */}
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('ContactUsScreen')}>
        <MaterialIcons name="phone" size={24} color="black" />
        <Text style={styles.footerText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  iconButton: {
    alignItems: 'center', // Align icons and text
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4, // Spacing between icon and text
  },
});

export default AppFooter;
