import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "../../components/layout/PageHeader";
import UpdatePhoto from "../../components/layout/UpdatePhoto";
import { Input, ButtonGroup } from "react-native-elements";
import GenderSelect from "../../components/layout/GenderSelect";
import SaveButton from "../../components/layout/SaveButton";

const NewPet = (props) => {
  const genders = ["Macho", "Fêmea"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View>
      <PageHeader
        title="Registrar Pet"
        default={props.default}
        backTo="/"
      ></PageHeader>
      <UpdatePhoto action="Adicionar Foto" />
      <Text style={styles.label}>Nome</Text>
      <Input />
      <Text style={styles.label}>Sexo</Text>
      <GenderSelect />
      <Text style={styles.label}>Horário</Text>
      <Input label="Próxima alimentação" />
      <Input label="Intervalo" />
      <SaveButton />
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
