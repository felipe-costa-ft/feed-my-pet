import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import FlexColumn from "../../utils/FlexColumn";
import Actions from "./Actions";
import Gender from "./Gender";
import PetDetails from "./PetDetails";
import PetPhoto from "./PetPhoto";

const PetCard = (props) => {
  return (
    <Card>
      <View style={styles.petCard}>
        <PetPhoto photo={props.petData.photoUri} />
        <PetDetails
          name={props.petData.name}
          nextFeeding={props.petData.nextFeeding}
        />
        <FlexColumn>
          <Actions petKey={props.petKey} refresh={props.refresh} />
          <Gender gender={props.petData.gender} />
        </FlexColumn>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  petCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PetCard;
