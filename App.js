import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

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
import SearchExplore from "./components/SearchExplore";
import SearchScreen from "./screens/SearchScreen";
import FilterScreen from "./screens/FilterScreen";
import Inbox from "./components/Inbox";
import Notification from "./components/Notification";
import PlaceDetailScreen from "./screens/PlaceDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Group>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
            {/* <RootStack.Screen name="Message" component={Inbox} />
            <RootStack.Screen name="Notification" component={Notification} /> */}
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name="Search" component={SearchScreen} />
            <RootStack.Screen name="Filter" component={FilterScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
