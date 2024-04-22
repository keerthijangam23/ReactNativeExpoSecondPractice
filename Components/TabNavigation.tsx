import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseList from "./CourseList";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "pink",
        }}
      >
        <Tab.Screen
          name="CourseList"
          component={CourseList}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
