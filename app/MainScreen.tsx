import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Lista</Text>
      <Text>sobre e logout</Text>
    </SafeAreaView>
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
