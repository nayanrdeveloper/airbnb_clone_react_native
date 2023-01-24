import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import Inbox from "../components/Inbox";
import Notification from "../components/Notification";

const Tab = createMaterialTopTabNavigator();

export default function InboxScreen() {
  return (
    <Tab.Navigator className="mt-10">
      <Tab.Screen name="Message" component={Inbox} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
