import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter, Route, Link } from "react-router-native";
import "react-native-get-random-values";

import MyPets from "./pages/MyPets";
import EditPet from "./pages/EditPet";

const Home = () => <MyPets default />;
const NewPet = () => <EditPet />;

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/newpet" component={NewPet} />
      </NativeRouter>
    </SafeAreaProvider>
  );
}
