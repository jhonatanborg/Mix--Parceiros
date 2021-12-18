import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Header.style";
import AuthContext from "../../../contexts/session";
export default function Header({ name, total }) {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.section}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.subtitle}>Bom dia</Text>
          <Text style={styles.title}>{name}</Text>
        </View>
        <TouchableOpacity onPress={() => signOut()}>
          <Text style={styles.title}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.heading1}>Total</Text>
          <Text style={styles.value}>{total}</Text>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.flex}>
            <Text style={styles.textFooter}>Ver detalhado</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}
