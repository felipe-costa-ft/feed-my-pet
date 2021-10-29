import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PageHeader from "../../components/layout/PageHeader";
import AddNewPet from "../../components/MyPets/AddNewPet";
import PetsList from "../../components/MyPets/PetsList";

import AsyncStorage from "@react-native-async-storage/async-storage";

const MyPets = (props) => {
  return (
    <View style={styles.myPets}>
      <PageHeader title="Meus Pets" default={props.default} />
      <ScrollView>
        <PetsList />
        <AddNewPet />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  myPets: {
    display: "flex",
    flex: 1,
  },
});

export default MyPets;
