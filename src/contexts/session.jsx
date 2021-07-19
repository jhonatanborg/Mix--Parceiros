import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "../services";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@MIXPARCEIROS:user");
      const storageToken = await AsyncStorage.getItem("@MIXPARCEIROS:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function login(user) {
    const response = await signIn.login(user);
    setUser(response.data);
    await AsyncStorage.setItem(
      "@MIXPARCEIROS:user",
      JSON.stringify(response.data)
    );
    await AsyncStorage.setItem("@MIXPARCEIROS:token", response.data.token);
    return response;
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        login: login,
        signOut: signOut,
        loading: loading,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
export default AuthContext;
