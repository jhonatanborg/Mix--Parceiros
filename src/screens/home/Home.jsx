import React, { useEffect, useState, useContext } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import Card from "../../components/molecules/Card/Card";
import Header from "../../components/molecules/Header/Header";
import AuthContext from "../../contexts/session";
import { Purchase } from "../../services";
import styles from "./Home.style";
export default function Home(props) {
  const { user } = useContext(AuthContext);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  function navigate(key) {
    props.navigation.navigate("Details", key);
  }
  useEffect(() => {
    async function fetchPurchases() {
      const response = await Purchase.listPurchases();
      setPurchases(response.data);
      setLoading(false);
    }
    const timeout = setTimeout(() => {
      fetchPurchases();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header name={user?.name} />
      <View style={styles.section}>
        <Text style={styles.heading1}>Lista de pedidos</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          purchases.map((item, key) => {
            return (
              <Card
                navigate={(id) => navigate(id)}
                company_name={item.client.name}
                id={item.id}
                data={item.created_at}
                total={item.total}
                quantity={item.itens.length}
                status={item.status}
              />
            );
          })
        )}
      </View>
    </ScrollView>
  );
}
