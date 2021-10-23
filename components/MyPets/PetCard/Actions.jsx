import React from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const edit = <FontAwesome5 name={"edit"} size={20} />;
const trash = <FontAwesome5 name={"trash"} size={20} />;

const Actions = (props) => {
  return (
    <View style={styles.actions}>
      <View>{edit}</View>
      <View>{trash}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Actions;
