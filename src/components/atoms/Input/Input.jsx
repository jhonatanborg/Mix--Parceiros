import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import styles from "./Input.style";

const InputText = ({ placeholder, numberOfLines, multiline, onChangeText }) => (
  <View style={styles.sectionInput}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      placeholderTextColor="grey"
      numberOfLines={numberOfLines}
      multiline={multiline}
      onChangeText={onChangeText}
    />
  </View>
);
export default InputText;
