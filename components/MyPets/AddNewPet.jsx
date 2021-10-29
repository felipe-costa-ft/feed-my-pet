import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useHistory } from "react-router-native";

const plus = <FontAwesome5 name={"plus"} size={20} color="#fff" />;

const AddNewPet = (props) => {
  const history = useHistory();
  return (
    <View style={styles.addButton}>
      <FAB
        icon={plus}
        color="#56CCF2"
        onPress={() => history.push(`/newpet`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginVertical: 30,
  },
});

export default AddNewPet;
