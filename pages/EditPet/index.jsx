import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "nanoid";
import { useHistory } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "../../components/layout/PageHeader";
import UpdatePhoto from "../../components/layout/UpdatePhoto";
import { Input, ButtonGroup } from "react-native-elements";
import GenderSelect from "../../components/layout/GenderSelect";
import SaveButton from "../../components/layout/SaveButton";

const NewPet = (props) => {
  const [petData, setPetData] = useState(props.petData ? props.petData : {});
  const history = useHistory();

  const savePetData = async () => {
    let key;
    if (!petData.key) {
      key = nanoid();
    } else {
      key = petData.key;
    }

    try {
      const jsonValue = JSON.stringify(petData);
      await AsyncStorage.setItem(key, jsonValue);

      history.push("/");
    } catch (e) {
      // saving error
    }
  };

  return (
    <View>
      <PageHeader
        title={props.key ? "Editar Pet" : "Registrar Pet"}
        default={props.default}
        backTo="/"
      ></PageHeader>
      <UpdatePhoto action={props.key ? "Editar Foto" : "Adicionar Foto"} />
      <Text style={styles.label}>Nome</Text>
      <Input
        value={petData.name}
        onChangeText={(n) => {
          setPetData({
            ...petData,
            name: n,
          });
        }}
      />
      <Text style={styles.label}>Sexo</Text>
      <GenderSelect setPetData={setPetData} petData={petData} />
      <Text style={styles.label}>Horário</Text>
      <Input
        label="Próxima alimentação"
        onChangeText={(h) => {
          setPetData({
            ...petData,
            nextFeeding: h,
          });
        }}
      />
      <Input
        label="Intervalo"
        onChangeText={(i) => {
          setPetData({
            ...petData,
            intervale: i,
          });
        }}
      />
      <SaveButton savePetData={savePetData} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  genderButton: {
    backgroundColor: "#56CCF2",
  },
});

export default NewPet;
