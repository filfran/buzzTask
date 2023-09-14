import { useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import MapIcon from "../ui/MapIcon";
import MapTabs from "../ui/MapTabs";
import MapPlaceDetails from "../ui/MapPlaceDetails";
import { PlacesContext } from "../store/context";
import { mapRegion } from "../data/data";
import { Colors } from "../utils/colors";

function Map() {
  const { places, selectedPlace } = useContext(PlacesContext);

  return (
    <View style={styles.map}>
      <MapView style={styles.map} initialRegion={mapRegion}>
        {places.map((place) => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          >
            <MapIcon place={place} />
          </Marker>
        ))}
      </MapView>
      <MapTabs style={styles.tabs} />
      {selectedPlace && (
        <MapPlaceDetails place={selectedPlace} style={styles.details} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  tabs: {
    backgroundColor: Colors.black,
    position: "absolute",
    bottom: 45,
    left: "25%",
  },
  details: {
    backgroundColor: Colors.black,
    borderRadius: 15,
    position: "absolute",
    bottom: 145,
    left: "5%",
  },
});

export default Map;
