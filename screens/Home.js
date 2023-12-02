import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LogIn from "../firebase/UserLogIn";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logInContainer}>
        <LogIn />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "center",
  },
  logInContainer: {
   
  }
});
