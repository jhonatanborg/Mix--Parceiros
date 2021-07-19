import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/session/login/Login";
const Auth = createStackNavigator();
const AuthRoutes = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
    </Auth.Navigator>
  );
};
export default AuthRoutes;
