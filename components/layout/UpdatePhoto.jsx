import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const AddPhoto = (props) => {
  return (
    <View style={styles.addPhoto}>
      <Avatar
        rounded
        icon={{
          name: "camera",
          type: "font-awesome",
        }}
        size="large"
        containerStyle={{ backgroundColor: "#56CCF2" }}
      />
      <Text style={styles.action}>{props.action}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addPhoto: {
    display: "flex",
    alignItems: "center",
    padding: 30,
  },
  action: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 15,
  },
});

export default AddPhoto;
