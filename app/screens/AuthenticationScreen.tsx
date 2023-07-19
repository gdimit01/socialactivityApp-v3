import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function AuthenticationScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Log in" onPress={() => {}} />
      <Button title="Sign up" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
