import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

function Filter({ title, style, data, action }) {
  return (
    <SelectDropdown
      data={data}
      searchInputStyle={styles.filter}
      onSelect={(selectedItem) => {
        action(selectedItem);
      }}
      defaultButtonText={title}
      renderDropdownIcon={(isOpened) => {
        return (
          <AntDesign
            name={isOpened ? "caretup" : "caretdown"}
            color={Colors.primary200}
            size={12}
          />
        );
      }}
      buttonStyle={[styles.filter, style]}
      buttonTextStyle={styles.filter__text}
      //only category select is implemented so disable the other two
      disabled={title !== "Category"}
    />
  );
}

const styles = StyleSheet.create({
  filter: {
    borderColor: Colors.primary400,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: Colors.black,
    height: 45,
    marginTop: 8,
  },
  filter__text: {
    color: Colors.white,
    fontSize: 15,
  },
});

export default Filter;
