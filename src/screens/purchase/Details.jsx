import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./Details.style";
import { MaterialIcons } from "@expo/vector-icons";
import ListItem from "../../components/molecules/ListItem/ListItem";
import Button from "../../components/atoms/Button/Button";
import { Purchase } from "../../services";
import { convertMoney } from "../../utils";
export default function Details({ route, navigation }) {
  const [itensPurchase, setItensPurchase] = useState([]);
  const [purchase, setPurchase] = useState(null);
  const [total, setTotal] = useState(null);
  function statusPurchase() {
    let status, action, statusUpdate;
    switch (purchase.status) {
      case "Pendente":
        status = "warning";
        action = "Confirmar Pedido";
        statusUpdate = "Confirmado";
        break;
      case "Confirmado":
        status = "purple";
        action =
          purchase.type === "online" ? "Despachar" : "Pronto para Retirar";
        statusUpdate =
          purchase.type === "online" ? "Saiu para Entrega" : "Pronto";
        break;
      case "Saiu para Entrega":
        status = "primary";
        action = "Finalizar";
        statusUpdate = "Entregue";
        break;
      case "Pronto":
        status = "primary";
        action = "Finalizar";
        statusUpdate = "Entregue";
        break;
      case "Entregue":
        status = "green";
        break;
      case "Cancelado":
        status = "red";
        action = "Pedido Cancelado";
        break;
      case "Finalizado":
        status = "light-green";
        action = "Pedido Finalizado";
        break;
      default:
        break;
    }
    return { status, action, statusUpdate };
  }
  function checked(key) {
    const checkedList = [...purchase];
    checkedList[key].check = !checkedList[key].check;
    setPurchase(checkedList);
  }
  useEffect(() => {
    async function fetchPurchase() {
      const response = await Purchase.getPurchase(route.params);
      setTotal(response.data.total);
      const itens = [];
      response.data.itens.forEach((item) => {
        itens.push({
          id: item.product.id,
          name: item.product.name,
          quantity: item.product_qtd,
          sale_value: item.product.sale_value,
          total: item.total,
          check: false,
        });
      });
      setItensPurchase(itens);
    }
    fetchPurchase();
  }, []);
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="#7E7E7E" />
          </TouchableOpacity>
          <Text style={styles.heading1}>Pedido #030412</Text>
        </View>
        <View>
          <View>
            <Text style={styles.heading1}>
              Emporio do caldo {statusPurchase.action}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.cardTotal}>
              <Text style={styles.textTotal}>Total</Text>
              <Text style={styles.textTotal}>{convertMoney(total)}</Text>
            </View>
            <View style={styles.cardCommission}>
              <Text style={styles.textCommision}>Sua comissão</Text>
              <Text style={styles.textCommision}>R$25,00</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingBottom: 140 }}>
          <View>
            <Text style={styles.heading1}>Itens do pedido</Text>
          </View>
          {itensPurchase &&
            itensPurchase.map((item, key) => {
              return (
                <ListItem
                  key={key.toString()}
                  name={item.name}
                  quantity={item.quantity}
                  sale_value={item.sale_value}
                  checked={() => checked(key)}
                  total={item.total}
                  check={item.check}
                />
              );
            })}
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Button />
      </View>
    </View>
  );
}
