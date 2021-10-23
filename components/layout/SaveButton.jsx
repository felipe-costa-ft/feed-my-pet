import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-elements";

const SaveButton = (props) => {
  return (
    <FAB
      color="#56CCF2"
      icon={{
        name: "tag",
        type: "font-awesome",
        color: "white",
      }}
    />
  );
};

export default SaveButton;
