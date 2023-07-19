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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import Icon from "react-native-vector-icons/FontAwesome";

type LoginScreenProps = {
  onLogin: () => void;
};

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    onLogin();
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const auth = getAuth(); // Get the auth instance
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      if (response && response.user) {
        navigation.navigate("ProfileScreen");
      } else {
        alert("Invalid login details");
      }
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
      onLogin();
    }
  };

  const handleSignIn = () => {
    signIn().catch((error) => {
      console.log("Unhandled promise rejection:", error);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image source={require("../../assets/back_arrow.png")} />
          </TouchableOpacity>
          <Icon name="user" size={30} color="#000" style={styles.icon} />
          <Text style={styles.title}>Otterly App</Text>
          <FormInput
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
          />
          <FormInput
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          {loading ? (
            <ActivityIndicator size="large" color="#f64060" />
          ) : (
            <>
              <FormButton title="Log In" onPress={handleSignIn} />
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
  forgotPassword: {
    color: "#f64060",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 15,
  },
});

export default LoginScreen;
