import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import Navigation1 from "./Navigation1";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Navigation1 /> */}
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({});
