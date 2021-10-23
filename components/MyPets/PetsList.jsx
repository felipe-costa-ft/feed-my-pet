import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import PetCard from "./PetCard";

const petMock = {
  name: "Jorginho",
  nextFeeding: "11:00 am",
  gender: "male",
};

const PetsList = (props) => {
  return (
    <View style={styles.petsList}>
      <PetCard petData={petMock} />
      <PetCard petData={petMock} />
      <PetCard petData={petMock} />
      <PetCard petData={petMock} />
    </View>
  );
};

const styles = StyleSheet.create({
  petsList: {
    marginVertical: 20,
  },
});

export default PetsList;
