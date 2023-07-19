import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type FormButtonProps = {
  title: string;
  onPress: () => void;
};

const FormButton = ({ title, onPress }: FormButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f64060",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FormButton;
