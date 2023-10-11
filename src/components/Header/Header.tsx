import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <Text>Carro 3B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
