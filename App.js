import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WishLists from "./screens/WishLists";
import TripScreen from "./screens/TripScreen";
import InboxScreen from "./screens/InboxScreen";
import LogInScreen from "./screens/LogInScreen";
import {
  HomeIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  UserIcon,
  BuildingStorefrontIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import store from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let colorName = "gray";
              let opacity = 0.9;
              let iconSize = 25;

              if (route.name === "Home") {
                return (
                  <HomeIcon
                    color={colorName}
                    size={iconSize}
                    opacity={opacity}
                  />
                );
                // iconName = focused
                //   ? "ios-information-circle"
                //   : "ios-information-circle-outline";
              } else if (route.name === "Wishlists") {
                return (
                  <HeartIcon
                    color={colorName}
                    size={iconSize}
                    opacity={opacity}
                  />
                );
              } else if (route.name === "Trips") {
                return (
                  <BuildingStorefrontIcon
                    color={colorName}
                    size={iconSize}
                    opacity={opacity}
                  />
                );
              } else if (route.name === "Inbox") {
                return (
                  <ChatBubbleBottomCenterIcon
                    color={colorName}
                    size={iconSize}
                    opacity={opacity}
                  />
                );
              } else if (route.name === "Log In") {
                return (
                  <UserIcon
                    color={colorName}
                    size={iconSize}
                    opacity={opacity}
                  />
                );
              }
            },
            tabBarActiveTintColor: "#F24B5B",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Wishlists" component={WishLists} />
          <Tab.Screen name="Trips" component={TripScreen} />
          <Tab.Screen name="Inbox" component={InboxScreen} />
          <Tab.Screen name="Log In" component={LogInScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
