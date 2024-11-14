import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName="SplashScreen">
      {/* Define your screen stack */}
      <Stack.Screen name="SplashScreen" options={{ title: 'Splash' }} />
      <Stack.Screen name="WelcomeScreen" options={{ title: 'Welcome' }} />
      <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} />
      <Stack.Screen name="ForgotPasswordScreen" options={{ title: 'Forgot Password' }} />
      <Stack.Screen name="SignUpScreen" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="DashboardScreen" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="PersonalDetailsScreen" options={{ title: 'Personal Details' }} />
      <Stack.Screen name="PackageDetailsScreen" options={{ title: 'Package Details' }} />
      <Stack.Screen name="BeneficiaryDetailsScreen" options={{ title: 'Beneficiary Details' }} />
      <Stack.Screen name="SubscriptionScreen" options={{ title: 'Subscription' }} />
      <Stack.Screen name="AddBeneficiaryScreen" options={{ title: 'Add Beneficiary' }} />
      <Stack.Screen name="ContactUsScreen" options={{ title: 'Contact Us' }} />
      <Stack.Screen name="BeneficiarySelectionScreen" options={{ title: 'Beneficiary popup' }} />
      <Stack.Screen name="AutoChat" options={{ title: 'AutoChat' }} />
    </Stack>
  );
}
