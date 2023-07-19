// src/screens/CommentScreen.tsx

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Sample comment data
const comments = [
  { id: "1", user: "User1", comment: "This is a great post!" },
  { id: "2", user: "User2", comment: "I totally agree." },
  { id: "3", user: "User3", comment: "Thanks for sharing!" },
  // ...add more comments as needed
];

const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <MaterialIcons name="person-outline" size={24} color="black" />
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentUser}>{item.user}</Text>
              <Text style={styles.commentText}>{item.comment}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  commentContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  commentTextContainer: {
    marginLeft: 10,
  },
  commentUser: {
    fontWeight: "bold",
    fontSize: 16,
  },
  commentText: {
    fontSize: 16,
  },
});

export default CommentScreen;
