import React, { useRef, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./BottomSheet.style";
import { Modalize } from "react-native-modalize";
import Button from "../../atoms/Button/Button";

export function BottomSheet({
  openBottom,
  fetchFilter,
  isLoading,
  isClose,
  closeModal,
}) {
  const listStatus = [
    {
      done: false,
      status: "Pendente",
    },
    {
      done: false,
      status: "Confirmado",
    },
    {
      done: false,
      status: "Saiu para Entrega",
    },
    {
      done: false,
      status: "Entregue",
    },
    {
      done: false,
      status: "Cancelado",
    },
    {
      done: false,
      status: "Pronto",
    },
  ];
  const [status, setStatus] = useState(listStatus);
  const modalizeRef = useRef(null);
  function handleStatus(keyStatus) {
    const newListSelected = [...status];
    const newArray = newListSelected.map((element, key) => {
      key === keyStatus ? (element.done = true) : (element.done = false);
      return element;
    });
    setStatus(newArray);
  }
  async function handleFilter() {
    const filter = status.filter((item) => item.done);
    await fetchFilter(filter[0].status);
  }
  useEffect(() => {
    if (openBottom) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [openBottom, isClose]);
  return (
    <Modalize onClose={() => closeModal()} snapPoint={250} ref={modalizeRef}>
      <View style={styles.card}>
        <Text style={styles.title}>Filtrar</Text>
        <View style={styles.listStatus}>
          {status.map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => handleStatus(key)}
                style={[
                  styles.chip,
                  item.done ? styles.chipSelected : styles.chipDefault,
                ]}
              >
                <Text
                  style={[item.done ? styles.textSelected : styles.textDefault]}
                >
                  {item.status}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button
          isLoading={isLoading}
          textButton="Filtrar"
          icon
          onPress={() => handleFilter()}
        />
      </View>
    </Modalize>
  );
}
