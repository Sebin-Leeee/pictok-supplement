import { StatusBar } from "expo-status-bar";
import React from "react";
import UserLogOut from "../firebase/UserLogOut";
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native"; // Added ScrollView
import InboxImage from "../components/InboxImage";

export default function Inbox({ route }) {
  const { username } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.welcomeText}>Welcome to PICTOK, {username}!</Text>
      <Text style={styles.tap}>Tap to listen.</Text>
      <InboxImage />
      <UserLogOut style={styles.logOut}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "black",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
  },
  tap: {
    fontSize: 16,
    marginBottom: 15,
  },
  logOut:{
    position: "absolute",
    bottom: 10,
  }
});
