import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const PageTitle = (props) => {
  return <Text style={styles.pageTitleText}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  pageTitleText: {
    fontSize: 20,
    width: 100,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default PageTitle;
