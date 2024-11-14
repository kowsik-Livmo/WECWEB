import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform, BackHandler } from 'react-native';

// Define the navigation type for your RootStack
type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  SignUpScreen: undefined;
  DashboardScreen: undefined;
  PersonalDetailsScreen: undefined;
  PackageDetailsScreen: undefined;
  BeneficiaryDetailsScreen: undefined;
  SubscriptionScreen: undefined;
  AddBeneficiaryScreen: undefined;
  ContactUsScreen: undefined;
  CustomMenuScreen: undefined;
};

// Define the AppHeader prop types
interface AppHeaderProps {
  username: string;
}

// Define the AppHeader component
const AppHeader: React.FC<AppHeaderProps> = ({ username }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Extract the first name from the username
  const firstName = username.split(' ')[0];

  // Function to handle the menu press
  const handleMenuPress = () => {
    console.log('Menu Pressed');
    navigation.navigate('CustomMenuScreen'); // Correctly typed navigation call
  };

  // Function to handle the close button
  const handleClose = () => {
    if (Platform.OS === 'android') {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Exit', 'Closing the app is not supported on iOS.');
    }
  };

  // Function to handle notification press
  const handleNotificationPress = () => {
    console.log('Notification Pressed');
    // Add logic to show notifications
  };

  return (
    <View style={styles.header}>
      {/* Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <MaterialIcons name="menu" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Hi {firstName}</Text>

      {/* Notification Button */}
      <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
        <MaterialIcons name="notifications" size={24} color="white" />
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <MaterialIcons name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E60050',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menuButton: {
    position: 'absolute',
    left: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 50,
  },
  notificationButton: {
    position: 'absolute',
    right: 50, // Adjust as per the space needed
  },
  closeButton: {
    position: 'absolute',
    right: 15,
  },
});

export default AppHeader;
