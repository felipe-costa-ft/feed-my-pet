import React from "react";
import { Header } from "react-native-elements";
import { StyleSheet } from "react-native";
import PageTitle from "./PageTitle";

const PageHeader = (props) => {
  return (
    <Header
      containerStyle={styles.header}
      backgroundColor="white"
      leftComponent={<PageTitle title={props.title} />}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
  },
});

export default PageHeader;
