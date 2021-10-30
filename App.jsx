import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter, Route, Link } from "react-router-native";
import "react-native-get-random-values";

import { requestMediaLibraryPermissionsAsync } from "expo-image-picker";

import MyPets from "./pages/MyPets";
import EditPet from "./pages/EditPet";

const Home = () => <MyPets default />;
const NewPet = () => <EditPet />;
const EditExistentPet = () => <EditPet />;

export default function App() {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/newpet" component={NewPet} />
        <Route path="/editpet/:key" component={EditExistentPet} />
      </NativeRouter>
    </SafeAreaProvider>
  );
}
