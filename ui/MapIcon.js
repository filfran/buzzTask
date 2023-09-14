import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { PlacesContext } from "../store/context";
import { Colors } from "../utils/colors";

function MapIcon({ place }) {
  const { selectedPlace, selectPlace } = useContext(PlacesContext);

  return (
    <Pressable
      style={() => [
        styles.marker,
        place.category === "bar" && {
          paddingHorizontal: selectedPlace?.id === place.id ? 26 : 15,
        },
        selectedPlace?.id === place.id && styles.marker__active,
      ]}
      onPress={() => selectPlace(place.id)}
    >
      {place.category === "restaurant" && (
        <MaterialIcons
          name="restaurant"
          size={selectedPlace?.id === place.id ? 32 : 20}
          color={Colors.white}
        />
      )}
      {place.category === "yoga" && (
        <MaterialCommunityIcons
          name="meditation"
          size={selectedPlace?.id === place.id ? 32 : 20}
          color={Colors.white}
        />
      )}
      {place.category === "shop" && (
        <FontAwesome5
          name="shopping-bag"
          size={selectedPlace?.id === place.id ? 32 : 20}
          color={Colors.white}
        />
      )}
      {place.category === "bar" && (
        <FontAwesome5
          name="wine-glass-alt"
          size={selectedPlace?.id === place.id ? 32 : 20}
          color={Colors.white}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  marker: {
    backgroundColor: Colors.black,
    padding: 12,
    borderRadius: 50,
  },
  marker__active: {
    padding: 20,
    backgroundColor: Colors.red,
  },
});

export default MapIcon;
