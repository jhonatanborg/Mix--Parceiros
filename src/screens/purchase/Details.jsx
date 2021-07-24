import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./Details.style";
import { MaterialIcons } from "@expo/vector-icons";
import ListItem from "../../components/molecules/ListItem/ListItem";
import Button from "../../components/atoms/Button/Button";
import { Purchase } from "../../services";
import { convertMoney } from "../../utils";
import AuthContext from "../../contexts/session";
import { statusPurchase } from "../../shared/purchase";
export default function Details({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const [itensPurchase, setItensPurchase] = useState(null);
  const [purchase, setPurchase] = useState(route.params);
  const [address, setAddress] = useState(route.params.address);
  const [total, setTotal] = useState(route.params.total);
  function checked(key) {
    const checkedList = [...itensPurchase];
    checkedList[key].check = !checkedList[key].check;
    setItensPurchase(checkedList);
  }
  function itens(response) {
    const itens = [];
    response.forEach((item) => {
      itens.push({
        id: item.product.id,
        name: item.product.name,
        quantity: item.product_qtd,
        sale_value: item.product.sale_value,
        total: item.total,
        check: false,
      });
    });
    return itens;
  }
  async function handleStatus() {
    try {
      if (purchase.status.statusUpdate) {
        const response = await Purchase.updateStatus(
          purchase.id,
          purchase.status.statusUpdate
        );
        setItensPurchase(itens(response.data.saleReturn.itens));
        response.data.saleReturn.status = statusPurchase(
          response.data.saleReturn.status
        );
        setPurchase(response.data.saleReturn);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    setItensPurchase(itens(route.params.itens));
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
          <Text style={styles.heading1}>Pedido {purchase?.id}</Text>
        </View>
        <View>
          <View>
            <Text style={styles.heading1}>Emporio do caldo</Text>
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
        <View style={styles.section2}>
          <View>
            <Text style={styles.heading1}>Endereço</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.content2}>
              <Text numberOfLines={2} style={styles.text}>
                {address && address.street
                  ? `${address.street},${address.number} - ${address.district} `
                  : "Retirada"}
              </Text>
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
                  id={key}
                  key={key}
                  name={item.name}
                  quantity={item.quantity}
                  sale_value={item.sale_value}
                  checked={(key) => checked(key)}
                  total={item.total}
                  check={item.check}
                />
              );
            })}
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Button
          textButton={purchase.status.action}
          onPress={() => handleStatus()}
        />
      </View>
    </View>
  );
}
