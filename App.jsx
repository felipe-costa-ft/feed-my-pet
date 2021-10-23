import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import MyPets from "./pages/MyPets";

export default function App() {
  return (
    <SafeAreaProvider>
      <MyPets />
    </SafeAreaProvider>
  );
}
