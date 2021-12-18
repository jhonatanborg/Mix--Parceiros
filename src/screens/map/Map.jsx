import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

import styles from "./Map.style";
// import { ADDRESS } from "../../../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../components/atoms/Button/Button";
import marker from "../../assets/images/logo-app.png";


const Map = ({ route, navigation }) => {


    return (
        <SafeAreaView style={styles.container}>
            <Button icon onPress={() => navigation.goBack()} textButton="Entrar" />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -11.872441442938301,
                    longitude: -55.50998523488398,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -11.845939438952133,
                        longitude: -55.500339041550475,
                    }}


                >

                    <View style={styles.markerFixed}>
                        <Image style={styles.marker} source={marker} />
                    </View>
                </Marker>
            </MapView>
        </SafeAreaView>

    );
};

export default Map;