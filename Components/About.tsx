import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
export default function About({ route }: any) {
  const { name } = route.params;
  const navigation: any = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  },[navigation,name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is {name} about screen</Text>
      <Button
        title="Update the name"
        onPress={() => navigation.setParams({ name: "keerthiJangam" })}
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate("Home", {
            nameAbout: "Keerthi data from About Screen",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
