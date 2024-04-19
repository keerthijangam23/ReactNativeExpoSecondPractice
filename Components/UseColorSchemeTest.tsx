import { View, Text, useColorScheme } from "react-native";
import React from "react";

const TestColor = () => {
  const theme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme == "dark" ? "dark" : "white",
      }}
    >
      <Text style={{ fontSize: 20 }}>TestColor</Text>
    </View>
  );
};
export default TestColor;
