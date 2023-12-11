import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Inbox from "./screens/Inbox";

const CustomHeader = ({ title }) => (
  <SafeAreaView>
    <Image
      source={require("./assets/logoName.png")} 
      style={styles.headerImage}
      resizeMode="contain"
    />
  </SafeAreaView>
);

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light} mapping={mapping}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                header: () => {
                  return <CustomHeader/>;
                },
              }}
            />
            <Stack.Screen
              name="Register"
              options={{
                headerStyle: {
                  backgroundColor: "#199DFC",
                },
                headerTintColor: "#fff",
              }}
              component={Register}
            />
            <Stack.Screen
              name="Inbox"
              options={{
                headerStyle: {
                  backgroundColor: "#199DFC",
                },
                headerTintColor: "#fff",
              }}
              component={Inbox}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    padding: 16,
  },
  headerImage: {
    width: 155,
    height: 155,
    alignSelf: "center",
  },
  headerTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
