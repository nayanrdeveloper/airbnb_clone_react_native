import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchExplore from "../components/SearchExplore";
import PlaceCategory from "../components/PlaceCategory";
import categoryList from "../data/categoryData";
import PlaceCard from "../components/PlaceCard";
import { useGetPlacesQuery } from "../features/placesApi";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

import SearchScreen from "./SearchScreen";
import WishLists from "./WishLists";
import TripScreen from "./TripScreen";
import InboxScreen from "./InboxScreen";
import LogInScreen from "./LogInScreen";
import ExploreScreen from "./ExploreScreen";

export default function HomeScreen() {
  const {
    data: places,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPlacesQuery();
  const [categoryIndex, setCategoryIndex] = useState(1);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let colorName = "gray";
          let opacity = 0.9;
          let iconSize = 25;

          if (route.name === "Explore") {
            return (
              <HomeIcon color={colorName} size={iconSize} opacity={opacity} />
            );
            // iconName = focused
            //   ? "ios-information-circle"
            //   : "ios-information-circle-outline";
          } else if (route.name === "Wishlists") {
            return (
              <HeartIcon color={colorName} size={iconSize} opacity={opacity} />
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
              <UserIcon color={colorName} size={iconSize} opacity={opacity} />
            );
          }
        },
        tabBarActiveTintColor: "#F24B5B",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Wishlists" component={WishLists} />
      <Tab.Screen name="Trips" component={TripScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Log In" component={LogInScreen} />
    </Tab.Navigator>
  );
}
