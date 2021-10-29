import React from "react";
import { StyleSheet, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const male = <FontAwesome5 name={"mars"} size={20} />;
const female = <FontAwesome5 name={"venus"} size={20} />;

const Gender = (props) => {
  return (
    <Text style={styles.gender}>
      {props.gender === "male" ? male : female}
      {props.gender === "male" ? "Macho" : "Fêmea"}
    </Text>
  );
};

const styles = StyleSheet.create({
  gender: {
    marginTop: 35,
    alignSelf: "flex-end",
  },
});
export default Gender;
