import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions  } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Input, Text, Button } from "@ui-kitten/components";

export default function UserRegistration() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const componentWidth = screenWidth - 30;

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={{ width: componentWidth }} status="info">
        <Text style={styles.signInText}>Sign Up</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <Input
            style={styles.input}
            placeholder="Email..."
            value={registerEmail}
            onChangeText={(text) => setRegisterEmail(text)}
          />
        </View>

        <View>
          <Text style={styles.label}>Password</Text>
          <Input
            style={styles.input}
            placeholder="Password..."
            value={registerPassword}
            onChangeText={(text) => setRegisterPassword(text)}
          />
        </View>

        <StatusBar style="auto" />
        <Button
          status="info"
          size="small"
          onPress={() => {
            register();
            setRegisterEmail("");
            setRegisterPassword("");
            navigation.navigate("Home");
          }}
          style={styles.registerButton}
        >
          SIGN UP
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  signInText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    width: "45%",
    alignSelf: "left",
  },
});
