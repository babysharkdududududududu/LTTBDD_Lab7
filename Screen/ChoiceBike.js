import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import React from "react";

const array = [
  {
    img: require("../img/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    des: "abc hjshfj jhdjhfj lkxjkcn  jhrjbf  jzhdjsbf vfgfg abc hjshfj jhdjhfj lkxjkcn abc hjshfj jhdjhfj lkxjkcn",
    type: "roadBike",
  },
  {
    img: require("../img/bione-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    des: "abc hjshfj jhdjhfj lkxjkcn  jhrjbf  jzhdjsbf vfgfg abc hjshfj jhdjhfj lkxjkcn abc hjshfj jhdjhfj lkxjkcn",
    type: "roadBike",
  },
  {
    img: require("../img/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    des: "abc hjshfj jhdjhfj lkxjkcn  jhrjbf  jzhdjsbf vfgfg abc hjshfj jhdjhfj lkxjkcn abc hjshfj jhdjhfj lkxjkcn",
    type: "roadBike",
  },

  {
    img: require("../img/bitwo-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    des: "abc hjshfj jhdjhfj lkxjkcn  jhrjbf  jzhdjsbf vfgfg abc hjshfj jhdjhfj lkxjkcn abc hjshfj jhdjhfj lkxjkcn",
    type: "roadBike",
  },
  {
    img: require("../img/bithree_removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    des: "abc hjshfj jhdjhfj lkxjkcn  jhrjbf  jzhdjsbf vfgfg abc hjshfj jhdjhfj lkxjkcn abc hjshfj jhdjhfj lkxjkcn",
    type: "Mountain",
  },
  {
    img: require("../img/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    des: "abc hjshfj jhdjhfj lkxjkcn  jhrjbf  jzhdjsbf vfgfg abc hjshfj jhdjhfj lkxjkcn abc hjshfj jhdjhfj lkxjkcn",
    type: "Mountain",
  },
];

const ChoiceBike = ({ navigation, route }) => {
  const [filter, setFilter] = React.useState(array);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "tomato",
          textAlign: "center",
        }}
      >
        The World's best Bike
      </Text>

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.press}
          onPress={() => {
            setFilter(array); // Clear the filter to show all items
          }}
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.press}
          onPress={() => {
            var newArr = array.filter((item) => {
              return item.type == "roadBike";
            });
            setFilter([...newArr]);
          }}
        >
          <Text>RoadBike</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.press}
          onPress={() => {
            var newArr = array.filter((item) => {
              return item.type == "Mountain";
            });
            setFilter([...newArr]);
          }}
        >
          <Text>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={filter}
        renderItem={({ item }) => {
          return (
            <View style={styles.abc}>
              <TouchableOpacity
                style={styles.main}
                onPress={() => {
                  navigation.navigate("BikeDetail", { item });
                }}
              >
                <Image style={styles.img} source={item.img}></Image>
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
                <Text style={{ textAlign: "center" }}>{item.price}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default ChoiceBike;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  press: {
    width: 70,
    height: 20,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  main: {
    borderWidth: 1,
    margin: 20,
    marginTop: 10,
    backgroundColor: "#fef5ec",
    borderRadius: 10,
  },
  img: {
    width: 135,
    height: 150,
    resizeMode: "contain",
  },
});
