import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./Input.style";
export const InputText = ({
  placeholder,
  numberOfLines,
  multiline,
  onChangeText,
  secureTextEntry,
  error,
}) => {
  return (
    <View style={styles.sectionInput}>
      <Text style={styles.text}>{placeholder}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="grey"
          numberOfLines={numberOfLines}
          multiline={multiline}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>X</Text>
          </View>
        )}
      </View>
    </View>
  );
};
