import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../utils/colors";

function MapTabs({ style }) {
  const [iconPressed, setIconPressed] = useState("map");

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={() => setIconPressed("list")}>
        <View
          style={[styles.item, iconPressed === "list" && styles.item__active]}
        >
          <Ionicons name="list" size={28} color={Colors.white} />
        </View>
      </Pressable>
      <Pressable onPress={() => setIconPressed("map")}>
        <View
          style={[styles.item, iconPressed === "map" && styles.item__active]}
        >
          <Ionicons name="md-map-sharp" size={28} color={Colors.white} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    borderRadius: 20,
  },
  item: {
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "transparent",
  },
  item__active: {
    borderColor: Colors.white,
  },
});

export default MapTabs;
