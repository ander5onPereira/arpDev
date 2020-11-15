import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Empty(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require("../../icons/empty2.png")} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    width: 200,
    height: 200,
    marginVertical: 50,
  },
  text: {
    fontSize: 20,
  },
});
export default Empty;
