import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { convertMoney } from "../../../utils";
import styles from "./Card.style";

export default function CardPurchase({
  client_name,
  id,
  navigate,
  date,
  total,
  quantity,
  status,
  colorPrimary,
  colorSecondary,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigate(id)}>
      <View style={styles.flex}>
        <Text style={styles.title}>Pedido {id}</Text>
        <Text style={styles.text2}>{date}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.text1}>{client_name}</Text>
        <Text style={styles.text1}>
          {quantity > 1 ? `${quantity} itens` : `${quantity} item`}
        </Text>
        <Text style={styles.text1}>{convertMoney(total)}</Text>
      </View>
      <View
        style={[
          styles.chip,
          { backgroundColor: colorPrimary, borderColor: colorSecondary },
        ]}
      >
        <Text style={[styles.textChip, { color: colorSecondary }]}>
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
