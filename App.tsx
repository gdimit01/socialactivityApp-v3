import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import HomeScreen from "./app/screens/HomeScreen";
import MeetUpsScreen from "./app/screens/MeetUpsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import CreateMeetupScreen from "./app/screens/CreateMeetupScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import LoadingScreen from "./app/screens/LoadingScreen";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MeetUps" component={MeetUpsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="CreateMeetup"
          component={CreateMeetupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
