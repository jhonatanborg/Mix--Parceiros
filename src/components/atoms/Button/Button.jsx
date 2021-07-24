import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./Button.style";
import { AntDesign } from "@expo/vector-icons";

export default function Button({ onPress, textButton, icon, isLoading }) {
  if (isLoading) {
    return (
      <TouchableOpacity
        disabled
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.loading}
      >
        <ActivityIndicator color="white" />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{textButton}</Text>
      {icon && <AntDesign name="arrowright" size={24} color="white" />}
    </TouchableOpacity>
  );
}
