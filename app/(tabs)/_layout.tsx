import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00A52C",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "briefcase" : "briefcase-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="connection"
        options={{
          title: "Connections",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
