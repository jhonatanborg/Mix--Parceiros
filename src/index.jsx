import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";

import React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { AuthProvider } from "./contexts/session";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  // AsyncStorage.clear();
  let [fontsLoaded] = useFonts({
    Jost_400Regular: require("./fonts/Jost_400Regular.ttf"),
    Jost_600SemiBold: require("./fonts/Jost_600SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
registerRootComponent(App);
