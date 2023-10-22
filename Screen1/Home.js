import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const array = [
  {
    img: require("../img/donut_red 1.png"),
    name: "tasty donut",
    title: "Spicy tasty donut family",
    price: "$10.00",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    type: "pink",
  },
  {
    img: require("../img/donut_yellow 1.png"),
    name: "tasty donut",
    title: "Spicy tasty donut family",
    price: "$20.00",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    type: "pink",
  },
  {
    img: require("../img/green_donut 1.png"),
    name: "tasty donut",
    title: "Spicy tasty donut family",
    price: "$30.00",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    type: "pink",
  },
  {
    img: require("../img/tasty_donut 1.png"),
    name: "tasty donut",
    title: "Spicy tasty donut family",
    price: "$10.00",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    type: "float",
  },
];
const Home = ({ navigation, route }) => {
  const [filter, setFilter] = React.useState(array);

  return (
    <View>
      <Text>Welcome, Jala!</Text>
      <Text style={{ fontWeight: "bold" }}>Choice your best food</Text>

      <View style={{ marginLeft: 20 }}>
        <View
          style={{
            width: 300,
            height: 50,
            borderWidth: 0.1,
            backgroundColor: "#f9f9f9",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#ccc" }}>Search food</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 80,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setFilter(array);
          }}
        >
          <Text>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 80,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            var newArr = array.filter((item) => {
              return item.type == "pink";
            });
            setFilter([...newArr]);
          }}
        >
          <Text>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 80,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            var newArray = array.filter((item) => {
              return item.type == "float";
            });
            setFilter([...newArray]);
          }}
        >
          <Text>Floating</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filter}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ marginBottom: 20, marginTop: 10 }}
              onPress={() => navigation.navigate("Choice", { item })}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#f4dddd",
                  borderRadius: "20px",
                  width: 400,
                  height: 120,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginRight: 20,
                    marginLeft: 10,
                  }}
                  source={item.img}
                ></Image>

                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold", marginBottom: 15 }}>
                    {item.name}
                  </Text>
                  <Text>{item.title}</Text>
                  <Text style={{ fontWeight: "bold", marginTop: 15 }}>
                    {item.price}
                  </Text>
                </View>
                <View
                  style={{
                    width: 40,
                    height: 30,
                    backgroundColor: "#f1b000",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0,
                    right: 10,
                    borderTopStartRadius: 20,
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
