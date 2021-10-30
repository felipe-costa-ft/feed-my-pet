import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
const AddPhoto = (props) => {
  const [petPhoto, setPetPhoto] = useState();

  useEffect(() => {
    setPetPhoto(props.petData.photoUri);
  }, [props.petData.photoUri]);

  const pickPetPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setPetPhoto(result.uri);
      props.setPetData({
        ...props.petData,
        photoUri: result.uri,
      });
    }
  };

  return (
    <View style={styles.addPhoto}>
      {petPhoto ? (
        <Avatar
          onPress={pickPetPhoto}
          rounded
          source={{ uri: petPhoto }}
          size="large"
          containerStyle={{ backgroundColor: "#56CCF2" }}
        />
      ) : (
        <Avatar
          onPress={pickPetPhoto}
          rounded
          icon={{
            name: "camera",
            type: "font-awesome",
          }}
          size="large"
          containerStyle={{ backgroundColor: "#56CCF2" }}
        />
      )}
      <Text onPress={pickPetPhoto} style={styles.action}>
        {props.action}
      </Text>
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
