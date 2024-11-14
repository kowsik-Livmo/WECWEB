import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomMenuScreen: React.FC = () => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const navigation = useNavigation();

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={[styles.container, { height: screenHeight, width: screenWidth * 0.8 }]}>
      <View style={styles.profileSection}>
        <Image
          source={profilePicture ? { uri: profilePicture } : require('./default-profile.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.lastLogin}>Last Login: 10/19/2024</Text>

        <TouchableOpacity onPress={pickImage} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigateToScreen('DashboardScreen')} style={styles.menuItem}>
          <MaterialIcons name="home" size={30} color="white" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('DashboardScreen')} style={styles.menuItem}>
          <MaterialIcons name="dashboard" size={30} color="white" />
          <Text style={styles.menuText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('PersonalDetailsScreen')} style={styles.menuItem}>
          <MaterialIcons name="person" size={30} color="white" />
          <Text style={styles.menuText}>Personal Details</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('AutoChat')} style={styles.menuItem}>
          <MaterialIcons name="chat" size={30} color="white" />
          <Text style={styles.menuText}>Auto Chat</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigateToScreen('VideoCall')} style={styles.menuItem}>
          <MaterialIcons name="video-call" size={30} color="white" />
          <Text style={styles.menuText}>Video Call Support</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigateToScreen('ContactUsScreen')} style={styles.menuItem}>
          <MaterialIcons name="contact-mail" size={30} color="white" />
          <Text style={styles.menuText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('ServiceSupport')} style={styles.menuItem}>
          <MaterialIcons name="support" size={30} color="white" />
          <Text style={styles.menuText}>Service & Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E60050',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    color: '#E60050',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastLogin: {
    color: '#E60050',
    fontSize: 12,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#E60050',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default CustomMenuScreen;
