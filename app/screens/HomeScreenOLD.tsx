import React, { useMemo } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type HomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const screens = {
  ProfileScreen: "Go to Profile",
  MeetUpsScreen: "Go to Meetups",
  SignUpScreen: "Sign Up",
  CreateMeetupScreen: "Create New Meetup",
  // Add more screens as needed
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const screenEntries = useMemo(() => Object.entries(screens), []);

  const goBackToWelcomeScreen = () => {
    navigation.navigate("WelcomeScreen"); // Navigate back to the WelcomeScreen
  };

  return (
    <ImageBackground
      source={require("../../assets/space.png")}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text>This is the home screen</Text>
      {screenEntries.map(([name, title], index) => (
        <View key={index} style={{ marginTop: 10 }}>
          <Button title={title} onPress={() => navigation.navigate(name)} />
        </View>
      ))}
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go Back to Welcome Screen"
          onPress={goBackToWelcomeScreen}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
