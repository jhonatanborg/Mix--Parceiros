import React, { useState, useContext } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
} from "react-native";
import Button from "../../../components/atoms/Button/Button";
import { InputText } from "../../../components/atoms/Input/Input";
import styles from "./Login.style";
import AuthContext from "../../../contexts/session";
import logo from "../../../assets/logo-app.png";
import { useLoginFormState } from "../../../hooks/useForm";
import { Error } from "../../../components/atoms/Error/Error";
export default function Login() {
  const { email, password, submit } = useLoginFormState();
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);
  async function handleSignIn() {
    console.log(submit.value);

    if (submit.value) {
      const response = await login({
        email: email.value,
        password: password.value,
        cpanel: true,
      })
        .then()
        .catch((err) => setError(true));
    }
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.flex}>
          <Image source={logo} style={styles.tinyLogo} />
          <Text style={styles.title}>Mix - delivery</Text>
        </View>
        <View style={styles.input}>
          <InputText
            numberOfLines={1}
            multiline={false}
            placeholder="Email"
            onChangeText={(value) => email.set(value)}
            error={submit.value && !email.valid}
          />
        </View>
        <View style={styles.input}>
          <InputText
            numberOfLines={1}
            multiline={false}
            placeholder="Senha"
            onChangeText={(value) => password.set(value)}
            secureTextEntry
            error={submit.value && !password.valid}
          />
        </View>
        <Error message="Usuário não encontrado" error={error} />
        <Button icon onPress={() => handleSignIn()} textButton="Entrar" />
      </KeyboardAvoidingView>
    </View>
  );
}
