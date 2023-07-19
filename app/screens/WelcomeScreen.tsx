/**
 * WelcomeScreen component
 * This component is used to display the welcome screen of the application.
 * It includes a logo, a slogan, a sign up button, and a login link.
 */

import React from "react";
import { WebView } from "react-native-webview";

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

// Define the props for the WelcomeScreen component
type WelcomeScreenProps = {
  navigation: NavigationProp<any, any>; // Navigation prop is used to navigate between screens
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  // Function to handle the sign up button press
  const handleSignUp = () => {
    navigation.navigate("SignUpScreen"); // Navigate to the SignUpScreen
  };

  // Function to handle the login link press
  const handleLogIn = () => {
    navigation.navigate("LoginScreen"); // Navigate to the LoginScreen
  };

  return (
    <ImageBackground
      source={require("../../assets/space.png")} // Background image for the screen
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        {/* Logo of the application */}
        <Image source={require("../../assets/icon.png")} style={styles.logo} />
        {/* Slogan of the application */}
        <Text style={styles.slogan}>What do you love?</Text>
      </View>
      <View style={styles.bottomContainer}>
        {/* Sign up button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        {/* Login link */}
        <Text style={styles.text}>
          Already a member?{" "}
          <Text style={styles.link} onPress={handleLogIn}>
            Log in
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

// Styles for the WelcomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between", // Distribute children along the main axis with equal space between them
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40, // Add some margin to the top for better appearance
  },
  logo: {
    width: 200, // Adjust the width as desired
    height: 100, // Adjust the height as desired
    resizeMode: "contain",
  },
  slogan: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  bottomContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 40, // Add some margin to the bottom for better appearance
  },
  button: {
    backgroundColor: "#f64060", // Meetup's red color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "130%", // Adjust the width as desired
    height: 50, // Adjust the height as desired
  },
  buttonText: {
    color: "#fff",
    fontSize: 18, // Adjust the font size as desired
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    marginTop: 20,
  },
  link: {
    color: "#f64060", // Meetup's red color
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
