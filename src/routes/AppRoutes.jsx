import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../screens/purchase/Details";
import Home from "../screens/home/Home";
import Map from "../screens/map/Map";
const Stack = createStackNavigator();
const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Details"
        component={Details}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={Map}
      />
    </Stack.Navigator>
  );
};
export default AppRoutes;
