import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Header from "./ui/Header";
import PlacesContextProvider from "./store/context";
import { Colors } from "./utils/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PlacesContextProvider>
      <StatusBar style="light" backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.black },
            headerTintColor: Colors.white,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ header: () => <Header /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlacesContextProvider>
  );
}
