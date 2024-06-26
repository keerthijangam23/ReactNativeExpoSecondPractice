import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import GetRequestApi from "./Components/GetRequestApi";
import UseColorSchemeTest from "./Components/UseColorSchemeTest"
import UseWindowDimensionsHook from "./Components/UseWindowDimensionsHook";
import NativeStackNavigation from "./Components/NativeStackNavigation";
import DrawerNavigation from "./Components/DrawerNavigation";
import TabNavigation from "./Components/TabNavigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <GetRequestApi /> */}
      {/* <UseColorSchemeTest/> */}
      {/* <UseWindowDimensionsHook/> */}
      {/* <NativeStackNavigation/> */}
      <DrawerNavigation/>
      {/* <TabNavigation/> */}
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
