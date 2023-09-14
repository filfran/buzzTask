import { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BackButton from "./BackButton";
import Filter from "./Filter";
import { PlacesContext } from "../store/context";
import { Colors } from "../utils/colors";

function Header() {
  const { categories, filterByCategory } = useContext(PlacesContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__top}>
        <BackButton />
        <Text style={styles.title}>View all</Text>
      </View>
      <View style={styles.buttons}>
        <Filter
          style={styles.button__category}
          title="Category"
          data={categories}
          action={filterByCategory}
        />
        <Filter style={styles.button__rating} title="Rating" />
        <Filter style={styles.button__price} title="Price" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
  },
  header__top: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    marginLeft: 10,
  },
  title: {
    flex: 0.8,
    textAlign: "center",
    color: Colors.white,
    fontSize: 20,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
    paddingBottom: 10,
    marginLeft: 16,
  },
  button__category: {
    flex: 0.32,
  },
  button__rating: {
    flex: 0.27,
  },
  button__price: {
    flex: 0.25,
  },
});

export default Header;
