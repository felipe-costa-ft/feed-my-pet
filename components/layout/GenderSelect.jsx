import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, ButtonGroup } from "react-native-elements";

const GenderSelect = (props) => {
  const genders = ["Macho", "Fêmea"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ButtonGroup
      onPress={(index) => setSelectedIndex(index)}
      selectedIndex={selectedIndex}
      buttons={genders}
      containerStyle={{ height: 100, borderRadius: 50, height: 60 }}
      selectedButtonStyle={styles.genderButton}
    />
  );
};

const styles = StyleSheet.create({
  genderButton: {
    backgroundColor: "#56CCF2",
  },
});
export default GenderSelect;
