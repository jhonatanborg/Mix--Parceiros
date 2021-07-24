import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { convertMoney } from "../../../utils";
import styles from "./ListItem.style";

export default function ListItem({
  id,
  name,
  quantity,
  sale_value,
  total,
  checked,
  check,
  key,
}) {
  return (
    <TouchableOpacity
      style={[styles.card, check && styles.cardCheck]}
      onPress={() => checked(id)}
    >
      <View style={styles.flex}>
        <View style={styles.content1}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text1}>
            Valor unitário:{convertMoney(sale_value)}
          </Text>
        </View>
        <View style={styles.content2}>
          <Text numberOfLines={2} style={styles.text1}>
            {quantity}x
          </Text>
        </View>
        <View style={styles.content2}>
          <Text style={styles.text1}>{convertMoney(total)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
