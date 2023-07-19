import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const createProfile = () => {
    // Code to handle creating a profile
  };

  const customizeProfile = () => {
    // Code to handle customizing the profile
  };

  const addProfilePicture = () => {
    // Code to handle adding a profile picture
  };

  const addInterests = () => {
    // Code to handle adding interests to the profile
  };

  // Mock user data
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    groupsJoined: 5,
    groupsCreated: 3,
    RSVPs: 10,
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>{userData.name}</Text>
      <Text style={styles.userEmail}>{userData.email}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{userData.groupsJoined}</Text>
          <Text style={styles.statLabel}>Groups Joined</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{userData.groupsCreated}</Text>
          <Text style={styles.statLabel}>Groups Created</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{userData.RSVPs}</Text>
          <Text style={styles.statLabel}>RSVPs</Text>
        </View>
      </View>
      <Text style={styles.title}>Welcome to the ProfileScreen</Text>
      <Text style={styles.normalText}>
        Users can create and customize their profiles, including adding profile
        pictures, personal information, and interests.
      </Text>
      <Text style={styles.normalText}>
        Profiles display basic user details and a feed of their activity, such
        as events they are attending, liked posts, and comments.
      </Text>
      <Button title="Create Profile" onPress={createProfile} />
      <Button title="Customize Profile" onPress={customizeProfile} />
      <Button title="Add Profile Picture" onPress={addProfilePicture} />
      <Button title="Add Interests" onPress={addInterests} />
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  stat: {
    alignItems: "center",
  },
  statCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#666666",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 16,
  },
  normalText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 16,
    textAlign: "center",
  },
});

export default ProfileScreen;
