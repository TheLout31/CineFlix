import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Trending from "../Components/Trending";
import { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import { useNavigation } from "@react-navigation/native";
import { fetchTopRatedData, fetchTrendingData, fetchUpcomingData } from "../Api/MovieDB";

function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [toprated, setToprated] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  });
  const getTrendingMovies = async () => {
    const data = await fetchTrendingData();
    if (data && data.results) setTrending(data.results);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingData();
    if (data && data.results) setUpcoming(data.results);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedData();
    if (data && data.results) setToprated(data.results);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ top: "always" }}>
        <StatusBar style="light" />
        <View style={styles.searchContainer}>
          <Ionicons name="list" size={30} color="white" />
          <Text style={styles.movieTitle}>
            <Text style={styles.movieTitle2}>Cine</Text>Flix
          </Text>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Ionicons name="search" size={30} color="white" />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          {/*showing trending movies using carousole */}
          <Trending data={trending} />
          {/*showing upcoming movies using row scroll view */}
          <MovieList title="Upcoming" data={upcoming} />
          {/*showing top rated movies using row scroll view */}
          <MovieList title="TopRated " data={toprated} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212A3E",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    margin: 10,
  },
  movieTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  movieTitle2: {
    color: "#2596be",
  },
});
