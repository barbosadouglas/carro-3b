import React from "react";

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function IconLogin() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/login.png")}
        style={{ width: 200, height: 200 }}
      />
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
