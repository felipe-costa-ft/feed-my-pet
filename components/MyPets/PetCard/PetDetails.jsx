import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PetDetails = (props) => {
  return (
    <View style={styles.detailsWrapper}>
      <Text style={styles.petName}>{props.name}</Text>
      <Text style={styles.nextFeeding}>{props.nextFeeding}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  petName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  nextFeeding: {
    marginVertical: 6,
  },
});

export default PetDetails;
