import React, { useRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./Input.style";
export const InputText = ({
  placeholder,
  numberOfLines,
  multiline,
  onChangeText,
  secureTextEntry,
  error,
}) => {
  const inputRef = useRef(null);
  return (
    <TouchableOpacity
      style={styles.sectionInput}
      onPress={() => {
        inputRef.current.focus();
      }}
    >
      <Text style={styles.text}>{placeholder}</Text>
      <View style={styles.row}>
        <TextInput
          ref={inputRef}
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
    </TouchableOpacity>
  );
};
