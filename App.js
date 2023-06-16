import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import AppNavigations from "./Navigations/AppNavigations";

export default function App() {
  return <AppNavigations />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
