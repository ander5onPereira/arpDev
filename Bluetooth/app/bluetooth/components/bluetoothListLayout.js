import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import BluetoothSerial from "react-native-bluetooth-serial-next";
//npx react-native link react-native-bluetooth-serial-next
function BluetoothListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "white",
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default BluetoothListLayout;
