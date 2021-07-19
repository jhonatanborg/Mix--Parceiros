import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

export default function Button({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Confirmar</Text>
    </TouchableOpacity>
  );
}
