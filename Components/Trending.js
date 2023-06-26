import { TouchableWithoutFeedback } from "react-native";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet,Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import {useNavigation} from '@react-navigation/native'
const {width,height} = Dimensions.get('screen');


function Trending({data}) {

  const navigation = useNavigation();
  const handlePress =(item)=> {
    navigation.navigate('Details', item);
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} onPressing={handlePress} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width *0.62}
        slideStyle={{ display: "flex", alignItems: "center", }}
      />
    </View>
  );
}

const MovieCard = ({ item ,onPressing}) => {
  return (
    <TouchableWithoutFeedback onPress={()=>onPressing(item)}>
      <Image source={{uri:'https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg'}} style={{width:width *0.6,height:height *0.4,borderRadius:30}} />
    </TouchableWithoutFeedback>
  );
};

export default Trending;

const styles = StyleSheet.create({
  mainContainer: {
    
    marginBottom: 8,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    marginBottom:10,
    marginLeft:10,
    fontSize:17
  },
});
