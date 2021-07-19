import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import AuthContext from "../contexts/session";

const Routes = () => {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
