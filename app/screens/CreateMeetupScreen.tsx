import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateMeetupScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the CreateMeetupScreen</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default CreateMeetupScreen;
