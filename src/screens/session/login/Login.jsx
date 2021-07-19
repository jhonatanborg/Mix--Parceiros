import React, { useState, useContext } from "react";
import { View, KeyboardAvoidingView, Platform, Image } from "react-native";
import Button from "../../../components/atoms/Button/Button";
import InputText from "../../../components/atoms/Input/Input";
import styles from "./Login.style";
import { useAuth } from "../../../contexts/session.jsx";
import AuthContext from "../../../contexts/session";

export default function Login() {
  const [email, setLogin] = useState("emporiodaeconomia@gmail.com");
  const [password, setPassword] = useState("001001001");
  const { login } = useContext(AuthContext);
  async function handleSignIn() {
    const response = await login({ email, password, cpanel: true });
    console.log("resposta", response);
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <Image
            source={{
              uri: "https://admin.bransa.com.br/img/logo.a1450bed.png",
            }}
            style={styles.tinyLogo}
          />
          <View style={styles.input}>
            <InputText
              numberOfLines={1}
              multiline={false}
              placeholder="Email"
              onChangeText={(value) => setLogin(value)}
            />
          </View>
          <View style={styles.input}>
            <InputText
              numberOfLines={1}
              multiline={false}
              placeholder="Senha"
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <Button onPress={() => handleSignIn()} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
