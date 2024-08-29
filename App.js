import Display from "./screens/Display";
import BpmAverage from "./screens/BpmAverage";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Display">
        <Stack.Screen
          name="Display"
          component={Display}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BpmAverage"
          component={BpmAverage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// npm start
// npm install firebase
// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


