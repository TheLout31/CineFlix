import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");
export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]);
  const movieName = "Joker";
  return (
    <SafeAreaView style={{ backgroundColor: "#212A3E", flex: 1 }}>
      <View
        style={{
          padding: 10,
          margin: 20,
          marginBottom: 3,
          marginTop: 15,
          justifyContent: "space-between",
          borderColor: "#2596be",
          borderWidth: 2,
          borderRadius: 30,
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor="#59595a"
          style={{ fontWeight: "400", color: "white" }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="close-circle" size={40} color="#2596be" />
        </TouchableOpacity>
      </View>
      {/* Results */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <Text style={styles.movietitle}>Result(4)</Text>
        {results.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                navigation.push("Details", item);
              }}
            >
              <View style={styles.movieView}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/67/09/6c/67096c448c9664196145a32b22707cbd.jpg",
                  }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 30,
                  }}
                />
                <Text style={styles.movietitle}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + "..."
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContianer: {
    marginBottom: 8,
  },
  Container: {
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upcoming: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 17,
  },
  seeall: {
    color: "#2596be",
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 10,
    fontSize: 17,
  },
  movietitle: {
    fontWeight: "300",
    marginLeft: 1,
    color: "white",
    marginTop: 5,
  },
  movieView: {
    margin: 10,
  },
});
