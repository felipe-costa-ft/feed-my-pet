import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

const FlexColumn = (props) => {
  return <View style={styles.flexColumn}>{props.children}</View>;
};

const styles = StyleSheet.create({
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
});

export default FlexColumn;
