import React from "react";
import { Avatar } from "react-native-elements";
import Dog from "../../../assets/dog.png";

const PetPhoto = (props) => {
  return <Avatar size="large" rounded source={Dog} />;
};

export default PetPhoto;
