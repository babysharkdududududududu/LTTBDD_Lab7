import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screen1/Home";
import Choice from "./Screen1/Choice";

const Stack = createNativeStackNavigator();
const Navigation1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Choice"
          component={Choice}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation1;
