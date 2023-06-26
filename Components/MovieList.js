import { Image, ScrollView, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
function MovieList({ title, data }) {
  const movieName = "Joker";
  return (
    <View>
      <View style={styles.Container}>
        <Text style={styles.upcoming}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeall}>SeeAll</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                Navigation.navigate("Movie", item);
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
    </View>
  );
}

export default MovieList;

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
    marginTop:5
  },
  movieView:{
    margin:10,
  }
});
