import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import car from "../assets/images/car.png";

import MenuOption from "../components/MenuOption";

import menuOptions from "../assets/menuItems";

const Controls = () => {
  return (
    <View style={styles.controls}>
      <Entypo name="lock" size={26} color="gray" />
      <MaterialCommunityIcons name="fan" size={26} color="gray" />
      <FontAwesome5 name="bolt" size={26} color="gray" />
      <Ionicons name="car-sport-sharp" size={26} color="gray" />
    </View>
  );
};

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.TopbgSection}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>My Mercedes Benz</Text>
              <Text style={styles.subtitle}>Parked</Text>
            </View>

            <FontAwesome name="user-circle" size={30} color="gray" />
          </View>
          <Image source={car} style={styles.image} resizeMode="contain" />
        </View>

        <FlatList
          data={menuOptions}
          showsVerticalScrollIndicator={false}
          renderItem={MenuOption}
          ListHeaderComponent={Controls}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  TopbgSection: {
    backgroundColor: "#0b0c0c",
    padding: 14,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 200,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
