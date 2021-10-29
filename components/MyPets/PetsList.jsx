import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View } from "react-native";
import PetCard from "./PetCard";

const PetsList = (props) => {
  const [pets, setPets] = useState([]);

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }

    return keys;
  };

  const getMultiple = async () => {
    const keys = await getAllKeys();
    let values;
    try {
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log(e);
    }

    setPets(values);
  };

  useEffect(async () => {
    getMultiple();
  }, []);

  return (
    <View style={styles.petsList}>
      {pets.map((pet) => (
        <PetCard key={pet[0]} petData={JSON.parse(pet[1])} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  petsList: {
    marginVertical: 20,
  },
});

export default PetsList;
