import { StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Inbox from "./screens/Inbox";

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
                title: "PicTok",
                headerStyle: {
                  backgroundColor: "#199DFC",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
