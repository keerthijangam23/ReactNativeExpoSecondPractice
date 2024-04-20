import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home({ route }: any) {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text> {route.params?.nameAbout}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", { name: "keerthi" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
