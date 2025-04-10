import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    Alert.alert(
      "Thông tin đăng nhập",
      `Username: ${username}\nPassword: ${password}`
    );
  };

  const handleRegister = () => {
    Alert.alert("Chuyển sang màn hình đăng ký (demo)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Họ tên: Đỗ Tiến Dũng</Text>
        <Text style={styles.infoText}>MSSV: 2124802010660</Text>
      </View>

      <Image
        source={require("../assets/pokemon-go-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="USERNAME"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor="#555"
      />
      <TextInput
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8b94c",
    alignItems: "center",
    paddingTop: 100,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  registerButton: {
    position: "absolute",
    top: 60,
    right: 20,
  },
  registerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "80%",
    height: 45,
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#c26464",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },
  infoBox: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  infoText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
