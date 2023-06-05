import { Dimensions, ImageBackground, View } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
function BgImage() {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1529651121800-01d45d421ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
        }}
        style={styles.img}
      >
        <LinearGradient
          colors={["#00000000", "black"]}
          style={{ height: "100%", width: "100%" }}
         
        ></LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default BgImage;

const styles = StyleSheet.create({
  img: {
    width: screenWidth,
    height: 400,
  },
  container: {
    width: screenWidth,
    height: "50%",
  },
});
