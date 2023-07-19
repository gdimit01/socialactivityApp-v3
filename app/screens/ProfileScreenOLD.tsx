import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostCard from "../../components/PostCard";
import firestore from "@react-native-firebase/firestore";

const ProfileScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const fetchPosts = async () => {
    try {
      const list = [];

      const querySnapshot = await firestore()
        .collection("posts")
        .where("userId", "==", route.params ? route.params.userId : user.uid)
        .orderBy("postTime", "desc")
        .get();

      querySnapshot.forEach((doc) => {
        const { userId, post, postImg, postTime, likes, comments } = doc.data();
        list.push({
          id: doc.id,
          userId,
          userName: "Test Name",
          userImg:
            "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
          postTime: postTime,
          post,
          postImg,
          liked: false,
          likes,
          comments,
        });
      });

      setPosts(list);
      setLoading(false);
      console.log("Posts: ", posts);
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection("users")
        .doc(route.params ? route.params.userId : user.uid)
        .get();

      if (documentSnapshot.exists) {
        console.log("User Data", documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    fetchPosts();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = (postId) => {
    // Code to handle post deletion
  };

  // Mock user data
  const userData = {
    userImg:
      "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
    fname: "John",
    lname: "Doe",
    about: "No details added.",
    posts: [],
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.userImg} source={{ uri: userData?.userImg }} />
        <Text style={styles.userName}>
          {userData?.fname} {userData?.lname}
        </Text>
        <Text style={styles.aboutUser}>{userData?.about}</Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>0</Text>
            <Text style={styles.userInfoSubTitle}>Groups Joined</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>0</Text>
            <Text style={styles.userInfoSubTitle}>Groups Created</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>0</Text>
            <Text style={styles.userInfoSubTitle}>RSVPs</Text>
          </View>
        </View>

        {userData?.posts.map((item) => (
          <PostCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    borderColor: "#2e64e5",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#2e64e5",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});

export default ProfileScreen;
