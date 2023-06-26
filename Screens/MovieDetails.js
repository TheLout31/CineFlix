import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../Components/Cast";
const { width, height } = Dimensions.get("screen");

export default function MovieDetails() {
  const [isFav, togglefav] = useState(false);
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const movieName = "Moothon";
  const [cast , setCast] = useState([1,2,3,4]);
  useEffect(() => {
    //call the movie details api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 60 }}
      style={{ flex: 1, backgroundColor: "#212A3E" }}
    >
      {/* Back button and fav icon */}
      <View>
        <SafeAreaView
          style={{
            position: "absolute",
            zIndex: 20,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 5,
            marginTop: 3,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglefav(!isFav)}>
            <Ionicons
              name="heart"
              size={35}
              color={isFav ? "#2596be" : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/2b/b8/f8/2bb8f8c695272b3a9a0ea8bfa5c5831a.jpg",
            }}
            style={{ width: width, height: height * 0.5 }}
          />
          <LinearGradient
            colors={["transparent", "#212A3E"]}
            style={{ width: width, height: height * 0.5, position: "absolute" }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>
      <View style={{ marginTop: -height * 0.10, alignItems: "center" , padding:10}}>
        {/* Movie Title */}
        <Text
          style={{
            fontWeight: "900",
            fontSize: 40,
            fontVariant: "tabular-nums",
            color: "white",
            marginBottom:10
          }}
        >
          {movieName}
        </Text>
        {/* Movie date and lenght */}
        <Text
          style={{
            fontWeight: '400',
            fontSize: 18,
            fontVariant: "tabular-nums",
            color: "white",
            marginBottom:10
          }}
        >
          Released 2019 - 120 min - Action
        </Text>
        {/* Description */}
        <Text
          style={{
            fontWeight: '100',
            fontSize: 14,
            fontVariant: "tabular-nums",
            color: "white",
            marginBottom:10
          }}
        >
          In the dark bylanes of Kamathipura, frequented by prostitutes, child traffickers and drug lords, a young teenager tries to learn the truth about Akbar, a fearless gangster who ran away from love.
        </Text>
        {/* Cast */}
        <Cast cast={cast}/>
      </View>
    </ScrollView>
  );
}
