import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useIsFocused } from '@react-navigation/native';
import React from "react";
const SettingsScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      alert("Enter");
      return () => alert("exit");
    }, [])
  );
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Text>{isFocused?"focused":"not Focused"}</Text>
      <Text style={styles.text}>SettingsScreen</Text>
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
