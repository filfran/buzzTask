import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../utils/colors";

function BackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.back}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color={Colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    borderWidth: 1,
    borderColor: Colors.primary400,
    borderRadius: 50,
    padding: 8,
  },
});

export default BackButton;
