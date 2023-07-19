import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type FormInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
};

const FormInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: FormInputProps) => {
  return (
    <TextInput
      value={value}
      style={styles.input}
      placeholder={placeholder}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      keyboardType="email-address" // Add the keyboardType prop
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
});

export default FormInput;
