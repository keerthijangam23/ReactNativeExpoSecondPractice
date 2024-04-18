import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import GetRequestApi from "./Components/GetRequestApi";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GetRequestApi />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
});
