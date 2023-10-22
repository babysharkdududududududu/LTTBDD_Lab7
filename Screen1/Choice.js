import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Choice = ({ navigation, route }) => {
  const { item } = route.params;
  const [count, setCount] = React.useState(5);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <View>
      <Image
        source={item.img}
        style={{ width: 400, height: 200, resizeMode: "contain" }}
      ></Image>
      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text>{item.title}</Text>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          {item.price}
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <AntDesign name="clockcircleo" size={14} color="black" />
            <Text style={{ marginLeft: 20 }}>Delivery in</Text>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 10 }}> 30 min</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginRight: 30,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#d69d00",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
            onPress={decrease}
          >
            <AntDesign name="minus" size={24} color="white" />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#d69d00",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
            onPress={increase}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", marginTop: 30, padding: 10 }}>
        Restaurant Info
      </Text>
      <Text style={{ padding: 10 }}>{item.des}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 300,
            height: 40,
            backgroundColor: "#f1b000",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({});
