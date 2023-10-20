import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screen/Home";
import ChoiceBike from "./Screen/ChoiceBike";
import BikeDetail from "./Screen/BikeDetail";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="ChoiceBike"
          component={ChoiceBike}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BikeDetail"
          component={BikeDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
