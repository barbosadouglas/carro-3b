import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import SingIn from "./SingIn";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SingIn></SingIn>
      {/* <TouchableOpacity onPress={() => {}}>
        <Text>Image Button</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
