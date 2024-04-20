import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import About from "./About";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function NativeStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "pink" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button Pressed!")}>
              <Text style={{ color: "white", fontSize: 16 }}>Menu Right</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => alert("Menu button Pressed!")}>
              <Text style={{ color: "white", fontSize: 16, paddingRight: 20 }}>
                Menu Left
              </Text>
            </Pressable>
          ),
          contentStyle: { backgroundColor: "skyblue" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "pink" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button Pressed!")}>
                <Text style={{ color: "white", fontSize: 16 }}>Menu Right</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <Pressable onPress={() => alert("Menu button Pressed!")}>
                <Text
                  style={{ color: "white", fontSize: 16, paddingRight: 20 }}
                >
                  Menu Left
                </Text>
              </Pressable>
            ),
            contentStyle: { backgroundColor: "skyblue" },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{ name: "Guest" }}
          // options={({route}:any)=>({title:route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
