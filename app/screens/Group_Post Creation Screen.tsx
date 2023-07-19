import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function GroupCreationScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Group Name" />
      <TextInput placeholder="Group Description" />
      <Button title="Create Group" onPress={() => {}} />
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
