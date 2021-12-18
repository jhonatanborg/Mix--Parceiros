import React, { useEffect, useState, useContext, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/molecules/Card/Card";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheet } from "../../components/molecules/BottomSheet/BottomSheet";
import Header from "../../components/molecules/Header/Header";
import AuthContext from "../../contexts/session";
import { Purchase } from "../../services";
import { statusPurchase } from "../../shared/purchase";
import styles from "./Home.style";
import { convertMoney } from "../../utils";
export default function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  const [purchases, setPurchases] = useState([]);
  const [status, setStatus] = useState("Pendente");
  const [bottom, setBottom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  function navigate(item) {
    navigation.navigate("Details", item);
  }
  function fetchFilter(filter) {
    setStatus(filter);
  }


  useEffect(() => {
    setIsLoading(true);
    const fetchPurchases = async () => {
      try {
        const response = await Purchase.listPurchases(status);
        const listPurchases = [];
        let total = 0;
        response.data.forEach((item) => {
          listPurchases.push({
            id: item.id,
            client_name: item.client?.name,
            date: item.created_at,
            total: item.total,
            quantity: item.itens.length,
            status: statusPurchase(item.status),
            itens: item.itens,
            address: item.deliveryAddress,
            payments: item.payments,
          });
          total += parseFloat(item.total)
        });
        setTotal(convertMoney(total));
        setPurchases(listPurchases);
        setIsLoading(false);
        setBottom(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setBottom(false);
      }
    };
    fetchPurchases();
    const timeout = setInterval(() => {
      fetchPurchases();
    }, 15000);
    return () => clearInterval(timeout);
  }, [status]);
  return (
    <>
      <ScrollView style={styles.container}>

        <Header name={user?.name} total={total} />
        <View style={styles.section}>
          <View style={styles.flex}>
            <Text style={styles.heading1}>Lista de pedidos</Text>
            <TouchableOpacity onPress={() => setBottom(true)}>
              <Ionicons name="ios-filter-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={purchases}
            progressViewOffset={5}
            refreshing={isLoading}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <Card
                navigate={(id) => navigate(item)}
                client_name={item.client_name}
                id={item.id}
                date={item.date}
                total={item.total}
                quantity={item.quantity}
                status={item.status.title}
                colorPrimary={item.status.color.primary}
                colorSecondary={item.status.color.secondary}
              />
            )}
            extraData={purchases}
            keyExtractor={(item, key) => item.id + key.toString()}
          />
        </View>
      </ScrollView>
      <BottomSheet
        closeModal={() => setBottom(false)}
        isClose={isLoading}
        openBottom={bottom}
        isLoading={isLoading}
        fetchFilter={(value) => fetchFilter(value)}
      />
    </>
  );
}
