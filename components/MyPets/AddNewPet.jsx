import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const plus = <FontAwesome5 name={"plus"} size={20} color="#fff" />;

const AddNewPet = (props) => {
  return (
    <View>
      <FAB icon={plus} color="#56CCF2"></FAB>
    </View>
  );
};

export default AddNewPet;
