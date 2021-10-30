import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "nanoid";
import { useHistory, useParams } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "../../components/layout/PageHeader";
import UpdatePhoto from "../../components/layout/UpdatePhoto";
import { Input } from "react-native-elements";
import GenderSelect from "../../components/layout/GenderSelect";
import SaveButton from "../../components/layout/SaveButton";

const NewPet = (props) => {
  const [petData, setPetData] = useState({ key: "", gender: "male" });
  const history = useHistory();
  const { key } = useParams();

  const getPetData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      await setPetData(JSON.parse(jsonValue));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    if (key) {
      await getPetData();
    }
  }, []);

  const savePetData = async () => {
    let petKey;
    if (!key) {
      petKey = nanoid();
    } else {
      petKey = key;
    }

    try {
      const jsonValue = JSON.stringify(petData);
      await AsyncStorage.setItem(petKey, jsonValue);

      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <PageHeader
        title={key ? "Editar Pet" : "Registrar Pet"}
        default={props.default}
        backTo="/"
      ></PageHeader>
      <UpdatePhoto action={key ? "Editar Foto" : "Adicionar Foto"} />
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
        value={petData.nextFeeding}
        onChangeText={(h) => {
          setPetData({
            ...petData,
            nextFeeding: h,
          });
        }}
      />
      <Input
        label="Intervalo"
        value={petData.intervale}
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
