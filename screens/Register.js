import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import UserRegisteration from "../firebase/UserRegistration";

export default function Register() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.registerContainer}>
        <UserRegisteration />
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
  registerContainer: {
  
  },
});
