import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BluetoothList from "./app/bluetooth/containers/bluetoothList";
export default function App() {
  return (
    <View style={styles.container}>
      <BluetoothList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
