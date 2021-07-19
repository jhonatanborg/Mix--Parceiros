import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Header.style";
export default function Header({ name }) {
  return (
    <View style={styles.section}>
      <View style={styles.flex}>
        <Text style={styles.title}>Olá, {name}</Text>
        <MaterialIcons name="menu" size={24} color="#fff" />
      </View>
      <View>
        <Text style={styles.heading1}>Saldo Comissões</Text>
        <Text style={styles.value}>R$ 145.00</Text>
        <Text style={styles.heading1}>4 compras</Text>
      </View>
    </View>
  );
}
