import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Input from "../src/components/Login/Input";
import { Link } from "expo-router";
import IconLogin from "../src/components/Login/IconLogin";

export default function SingIn() {
  const [route, setRoute] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleValidar = () => {
    if (username === "teste" && password === "123") {
      setRoute("/MainScreen");
    } else {
      alert("usuario e/ou senha incorreto(s)!");
      console.log("usuario e/ou senha incorreto(s)!");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <Input
        setCharacters={setUsername}
        characters={username}
        placeholder={"username"}
      />
      <Input
        setCharacters={setPassword}
        characters={password}
        secure={true}
        placeholder={"password"}
      />
      <TouchableOpacity onPress={handleValidar}>
        <Link href={route}>
          <IconLogin></IconLogin>
        </Link>
      </TouchableOpacity>
      <Link href={route}></Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 350,
    height: 640,
    backgroundColor: "#c7c7c7",
    alignItems: "center",
    justifyContent: "center",
  },
});
