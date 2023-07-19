import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}
const MeetupsScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  // Dummy events data
  const events = [
    {
      id: "1",
      title: "Coding Meetup",
      description:
        "Join us for a fun and interactive coding session. Bring your laptops!",
      date: "2023-07-25",
      time: "14:00",
      location: "Central Park, NYC",
    },
    {
      id: "2",
      title: "AI Workshop",
      description:
        "Let's demystify AI! Join us for this beginner-friendly workshop.",
      date: "2023-07-30",
      time: "10:00",
      location: "Tech Center, NYC",
    },
    {
      id: "3",
      title: "Machine Learning",
      description:
        "Let's demystify ML! Join us for this beginner-friendly workshop.",
      date: "2023-07-30",
      time: "12:00",
      location: "Tech Center, London",
    },
  ];

  const renderItem = ({ item }: { item: Event }) => (
    <View style={styles.eventBox}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <View style={styles.descriptionContainer}>
        <Ionicons
          name="ios-information-circle-outline"
          size={24}
          color="black"
        />
        <Text style={[styles.eventDescription, { flexShrink: 1 }]}>
          {item.description}
        </Text>
      </View>
      <Text style={styles.eventDetails}>
        {item.date} at {item.time}
      </Text>
      <Text style={styles.eventDetails}>Location: {item.location}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.moreInfoButton}>More info...</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.rsvpButton}>RSVP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Welcome to the Meetups Screen</Text>

      {/* Display the events */}
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreInfoButton: {
    color: "#0000ff",
    textDecorationLine: "underline",
  },
  rsvpButton: {
    color: "#0000ff",
    textDecorationLine: "underline",
  },
  eventBox: {
    width: "100%",
    padding: 15,
    paddingRight: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventDetails: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default MeetupsScreen;
