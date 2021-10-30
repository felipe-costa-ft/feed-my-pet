import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useHistory } from "react-router-native";

const edit = <FontAwesome5 name={"edit"} size={20} />;
const trash = <FontAwesome5 name={"trash"} size={20} />;

const Actions = (props) => {
  const history = useHistory();

  const deletePet = async () => {
    try {
      await AsyncStorage.removeItem(props.petKey);
      props.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.actions}>
      <FAB
        onPress={() => {
          history.push(`/editpet/${props.petKey}`);
        }}
        style={styles.actionButton}
        size="small"
        icon={edit}
        color="khaki"
      />
      <FAB
        onPress={() => deletePet()}
        style={styles.actionButton}
        size="small"
        icon={trash}
        color="#CD5C5C"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    marginHorizontal: 3,
  },
});

export default Actions;
