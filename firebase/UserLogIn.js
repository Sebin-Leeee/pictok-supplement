import { StyleSheet, View, Dimensions } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { Card, Input, Text, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const navigation = useNavigation();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const screenWidth = Dimensions.get('window').width;
  const componentWidth = screenWidth - 30;

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const username = loginEmail.split('@')[0];
      console.log(userCredential.user);
      navigation.navigate("Inbox", { username }); 
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={{width: componentWidth}} status="info">
        <Text style={styles.signInText}>Sign In</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <Input
            style={styles.input}
            placeholder="Email..."
            value={loginEmail}
            onChangeText={(text) => {
              setLoginEmail(text);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <Input
            style={styles.input}
            placeholder="Password..."
            value={loginPassword}
            onChangeText={(text) => {
              setLoginPassword(text);
            }}
          />
        </View>

        <View style={styles.loginButtonContainer}>
          <Button
            status="info"
            size="small"
            title="Login"
            onPress={() => {
              login();
              setLoginEmail("");
              setLoginPassword("");
            }}
            style={styles.loginButton}
          >
            LOGIN
          </Button>
        </View>

        <Button
          status="basic"
          size="small"
          onPress={() => navigation.navigate("Register")}
          style={styles.registerButton}
        >
          {" "}
          Sign Up
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
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButtonContainer: {
    width: "35%",
    alignSelf: "left",
  },
  registerButton: {
    backgroundColor: "white",
    color: "darkgrey",
    width: "40%",
    alignSelf: "flex-end",
    marginTop: 10,
  },
});
