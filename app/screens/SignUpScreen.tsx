import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput"; // Import the FormInput component
import Icon from "react-native-vector-icons/FontAwesome";

type SignUpScreenProps = {
  onSignUp: () => void;
};

const SignUpScreen = ({ onSignUp }: SignUpScreenProps) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const authInstance = getAuth();

      // Validate form data - Email validation using regex
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (!email.match(emailRegex)) {
        alert("Invalid email format.");
        return;
      }

      // Validate form data
      if (email !== confirmEmail) {
        alert("Email does not match.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Password does not match.");
        return;
      }

      // Password validation using regex
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/;

      if (!passwordRegex.test(password)) {
        alert(
          "Password must contain at least 8 characters with a mixture of numbers, special symbols (@$!%*#?&) and alphabets."
        );
        return;
      }

      // Create user with email and password
      const response = await createUserWithEmailAndPassword(
        authInstance,
        email,
        password
      );

      // Check if user creation was successful
      if (response && response.user) {
        // User created successfully
        console.log("User created successfully:", response.user);
        alert("User created successfully!");
      } else {
        // User creation failed
        alert("User creation failed.");
      }
    } catch (error: any) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image source={require("../../assets/back_arrow.png")} />
          </TouchableOpacity>
          <Icon name="user-plus" size={30} color="#000" style={styles.icon} />
          <Text style={styles.title}>Sign Up</Text>
          <FormInput
            value={firstName}
            placeholder="First Name"
            onChangeText={setFirstName}
          />
          <FormInput
            value={surname}
            placeholder="Surname"
            onChangeText={setSurname}
          />
          <FormInput
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
          />
          <FormInput
            value={confirmEmail}
            placeholder="Confirm Email"
            onChangeText={setConfirmEmail}
          />
          <FormInput
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <FormInput
            value={confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
          />
          {loading ? (
            <ActivityIndicator size="large" color="#f64060" />
          ) : (
            <>
              <FormButton title="Create Account" onPress={handleSignUp} />
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  icon: {
    marginBottom: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default SignUpScreen;
