import { StatusBar } from "expo-status-bar";
import {  View,StyleSheet } from "react-native";
import BgImage from "./Screens/BgImage";
export default function App() {
  return (
    <View style={styles.container}>
      <BgImage/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});