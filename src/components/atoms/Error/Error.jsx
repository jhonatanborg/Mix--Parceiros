import React from "react";
import { Text, View } from "react-native";
import styles from "./Error.style";
import { Feather } from "@expo/vector-icons";

export const Error = ({ message, error }) => {
  if (error) {
    return (
      <View style={styles.error}>
        <Feather
          name="alert-triangle"
          size={14}
          color={styles.errorText.color}
        />
        <Text style={styles.errorText}>{message}</Text>
      </View>
    );
  }
  return null;
};
