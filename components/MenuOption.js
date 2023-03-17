import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        {item.icon ? (
          <item.icon />
        ) : (
          <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        )}

        <Text style={styles.optionText}>{item.name}</Text>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#0b0c0c",
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOption;
