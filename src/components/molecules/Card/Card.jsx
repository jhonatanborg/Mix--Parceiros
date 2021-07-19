import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { convertMoney } from "../../../utils";
import styles from "./Card.style";

export default function CardPurchase({
  company_name,
  id,
  navigate,
  data,
  total,
  quantity,
  status,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigate(id)}>
      <View style={styles.flex}>
        <Text style={styles.title}>Pedido {id}</Text>
        <Text style={styles.text2}>{data}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.text1}>{company_name}</Text>
        <Text style={styles.text1}>
          {quantity > 1 ? `${quantity} itens` : `${quantity} item`}
        </Text>
        <Text style={styles.text1}>{convertMoney(total)}</Text>
      </View>
      <View style={styles.chip}>
        <Text style={styles.textChip}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}
