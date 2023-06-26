import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Cast({ cast }) {
  let personName = "Jonny Depph";
  let characterName = "Jack Sparrow";
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 10,
          fontSize: 17,
        }}
      >
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ margin: 4, alignItems: "center" }}
              >
                <Image
                  source={{
                    uri: "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp-1200x834.jpg",
                  }}
                  style={{ borderRadius: 30, height: 70, width: 70 , overflow:'hidden' }}
                />
                <Text
                  style={{
                    fontWeight: "100",
                    fontSize: 12,
                    fontVariant: "tabular-nums",
                    color: "white",
                    marginBottom: 10,
                    marginRight: 10,
                  }}
                >
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + "..."
                    : characterName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
