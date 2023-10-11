import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>header</Text>
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
