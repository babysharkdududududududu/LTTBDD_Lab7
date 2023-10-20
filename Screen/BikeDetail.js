import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BikeDetail = ({ navigation, route }) => {
  console.log(route.params);
  const [isLiked, setIsLiked] = React.useState(false);
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.img}>
          <Image
            style={{
              height: "350px",
              width: "150px",
              padding: 20,
              resizeMode: "contain",
            }}
            source={item.img}
          ></Image>
        </View>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={{ flexDirection: "row", paddingLeft: 30 }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Inter",
            marginRight: 30,
            color: "grey",
          }}
        >
          15% {item.price}
        </Text>
        <Text style={{ textDecorationLine: "line-through", fontSize: 20 }}>
          440$
        </Text>
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
        Description
      </Text>
      <Text style={{ color: "grey", textAlign: "center", marginTop: 20 }}>
        {item.des}
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{ position: "absolute", top: 45, left: 30 }}
          onPress={() => setIsLiked(!isLiked)} // Toggle the isLiked state
        >
          <AntDesign
            name={isLiked ? "heart" : "hearto"} // Use "heart" if liked, "hearto" if not
            size={24}
            color={isLiked ? "red" : "black"} // Change color to red if liked
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              width: 160,
              height: 40,
              backgroundColor: "#e94141",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BikeDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  img: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdecec",
    width: "90%",
    height: 350,
  },
  name: {
    fontFamily: "Inter",
    fontSize: 40,
    paddingLeft: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
