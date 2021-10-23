import React from "react";
import { Header } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import PageTitle from "./PageTitle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PageHeader = (props) => {
  return (
    <Header
      containerStyle={styles.header}
      backgroundColor="white"
      leftComponent={
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {props.default ? null : backButton}
          <PageTitle title={props.title} />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
  },
  backIcon: {
    marginRight: 20,
  },
});

const backButton = (
  <FontAwesome5 name={"arrow-left"} size={20} style={styles.backIcon} />
);

export default PageHeader;
