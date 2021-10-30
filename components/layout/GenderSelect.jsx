import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, ButtonGroup } from "react-native-elements";

const GenderSelect = (props) => {
  const genders = ["Macho", "Fêmea"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (props.petData.gender === "male") {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(1);
    }
  }, [props.petData]);
  return (
    <ButtonGroup
      onPress={(index) => {
        setSelectedIndex(index);
        if (index === 0) {
          props.setPetData({ ...props.petData, gender: "male" });
        } else {
          props.setPetData({ ...props.petData, gender: "female" });
        }
      }}
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
