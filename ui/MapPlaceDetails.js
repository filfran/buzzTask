import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { capitalizeFirstLetter, truncateString } from "../utils/helpers";
import { Colors } from "../utils/colors";

function MapPlaceDetails({ place, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={place.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{truncateString(place.title)}</Text>
        <Text style={styles.subtitle}>
          {place.distance} mi away
          <Entypo name="dot-single" size={16} color={Colors.primary300} />
          {capitalizeFirstLetter(place.category)}
        </Text>
        <View style={styles.rating__container}>
          <AntDesign name="star" size={18} color={Colors.yellow} />
          <Text style={styles.rating}>{place.rating}</Text>
        </View>
      </View>
      <FontAwesome name="heart-o" size={24} color={Colors.primary300} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    flexDirection: "column",
    gap: 3,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
  },
  subtitle: {
    color: Colors.primary300,
    fontSize: 16,
    alignItems: "center",
  },
  rating__container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rating: {
    color: Colors.primary300,
    fontSize: 18,
  },
});

export default MapPlaceDetails;
