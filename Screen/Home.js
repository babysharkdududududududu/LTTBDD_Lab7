import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.img}>
        <Image
          style={{ width: 300, height: 200, resizeMode: "contain" }}
          source={require("../img/bitwo-removebg-preview.png")}
        ></Image>
      </View>

      <Text style={styles.body}>POWER BY SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ChoiceBike");
        }}
      >
        <View style={styles.press}>Get Started</View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 0.1,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7e5e4",
    borderRadius: 20,
    width: "90%",
  },
  body: {
    flex: 0.1,

    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e94141",
    width: "80%",
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  press: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
