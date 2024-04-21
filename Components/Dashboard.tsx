import { View, Text, StyleSheet, Button } from "react-native";

const Dashboard = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer} />
      <Button
        title="Settings"
        onPress={() => navigation.jumpTo("SettingsScreen")}
      />
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
