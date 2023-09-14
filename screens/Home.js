import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";

function Home({ navigation }) {
  const navigateToMap = () => {
    navigation.navigate("Map");
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-map-outline"
        size={32}
        color={Colors.black}
        onPress={navigateToMap}
      />
      <Text style={styles.container__text} onPress={navigateToMap}>
        Tap me and see the Map
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary100,
  },
  container__text: {
    fontSize: 22,
  },
});

export default Home;
