import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Header.style";
import AuthContext from "../../../contexts/session";
export default function Header({ name }) {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.section}>
      <View style={styles.flex}>
        <Text style={styles.title}>Olá, {name}</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Text style={styles.title}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading1}>Saldo Comissões</Text>
        <Text style={styles.value}>R$ 145.00</Text>
        <Text style={styles.heading1}>4 compras</Text>
      </View>
    </View>
  );
}
