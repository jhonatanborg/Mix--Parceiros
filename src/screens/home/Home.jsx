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
export default function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  const [purchases, setPurchases] = useState([]);
  const [status, setStatus] = useState("Pendente");
  const [bottom, setBottom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
          });
        });
        setPurchases(listPurchases);
        setIsLoading(false);
        setBottom(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setBottom(false);
      }
    };
    const timeout = setTimeout(() => {
      fetchPurchases();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [status]);
  return (
    <>
      <ScrollView style={styles.container}>
        <Header name={user?.name} />
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
