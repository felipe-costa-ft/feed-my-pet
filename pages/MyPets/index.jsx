import React from "react";
import { ScrollView, View } from "react-native";
import PageHeader from "../../components/layout/PageHeader";
import AddNewPet from "../../components/MyPets/AddNewPet";
import PetsList from "../../components/MyPets/PetsList";

const MyPets = (props) => {
  return (
    <View>
      <PageHeader title="Meus Pets" default={props.default} />
      <ScrollView>
        <PetsList />
      </ScrollView>
      <AddNewPet />
    </View>
  );
};

export default MyPets;
