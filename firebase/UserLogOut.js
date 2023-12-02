import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { Button } from "@ui-kitten/components";

export default function UserLogOut() {
  const navigation = useNavigation();
  const logOutUser = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigation.navigate("Home");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Button status="info" size="small" title="Login" onPress={logOutUser}>
          Log Out
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
  },
});
