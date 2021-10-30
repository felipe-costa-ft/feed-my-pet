import React from "react";
import { Avatar } from "react-native-elements";
import Dog from "../../../assets/dog.png";

const PetPhoto = (props) => {
  if (props.photo) {
    return <Avatar size="large" rounded source={{ uri: props.photo }} />;
  }
  return (
    <Avatar
      size="large"
      containerStyle={{ backgroundColor: "#56CCF2" }}
      rounded
      icon={{ name: "paw", type: "font-awesome" }}
    />
  );
};

export default PetPhoto;
