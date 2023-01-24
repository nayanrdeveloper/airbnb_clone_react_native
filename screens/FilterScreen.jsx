import { View, Text, ScrollView, Switch } from "react-native";
import React from "react";
import {
  HomeIcon,
  XMarkIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  HomeModernIcon,
} from "react-native-heroicons/outline";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

export default function FilterScreen() {
  const bedroomsFilterList = ["any", 1, 2, 3, 4, 5, 6, 7, "8+"];
  const propertyTypeList = [
    {
      id: 1,
      icon: HomeIcon,
      title: "House",
    },
    {
      id: 2,
      icon: HomeModernIcon,
      title: "Flat",
    },
    {
      id: 3,
      icon: BuildingOffice2Icon,
      title: "Guest House",
    },
    {
      id: 4,
      icon: BuildingStorefrontIcon,
      title: "Hotel",
    },
  ];

  const amenities = [
    {
      id: 1,
      title: "Wifi",
      value: "wifi",
    },
    {
      id: 2,
      title: "Kitchen",
      value: "kitchen",
    },
    {
      id: 3,
      title: "Washing Machine",
      value: "washingMachine",
    },
  ];

  const bookingOptions = [
    {
      id: 1,
      title: "Instant Book",
      desc: "Book without waiting for the host to respond",
      value: "instant",
    },
    {
      id: 2,
      title: "Self Check in",
      desc: "Easy access to the property once you arrive",
      value: "selfCheck",
    },
  ];

  const accessibility = [
    {
      id: 1,
      title: "Step-Free guest entrance",
      value: "freeGuest",
    },
    {
      id: 2,
      title: "Guest entrance wider than 32 inches (81 centimeter)",
      value: "entranceWider",
    },
    {
      id: 3,
      title: "Step-free path to the guest entrance",
      value: "freeGuestPath",
    },
  ];

  const topTierStays = [
    {
      id: 1,
      title: "Superhost",
      desc: "Stay with recognized hosts",
      value: "superHost",
    },
    {
      id: 2,
      title: "Airbnb Plus",
      desc: "A Selected of Place to stay verified for quality and design",
      value: "airbnbPlus",
    },
  ];

  const hostLanguage = [
    {
      id: 1,
      language: "English",
      link: "",
    },
    {
      id: 2,
      language: "French",
      link: "",
    },
    {
      id: 3,
      language: "German",
      link: "",
    },
    {
      id: 4,
      language: "Hindi",
      link: "",
    },
  ];
  const navigator = useNavigation();
  return (
    <ScrollView className="mt-10 bg-white">
      <View className="space-x-2 items-center border-b border-gray-300 px-2 py-4 flex-row">
        <XMarkIcon size={25} color="gray" onPress={() => navigator.navigate('Home')} />
        <Text className="font-semibold text-lg">Filter</Text>
      </View>
      {/* Type of Places */}
      <View className="border-b border-gray-300">
        <Text className="mt-3 font-semibold text-lg ml-2">Type of Place</Text>
        <View className="flex-row items-center justify-between px-3 py-2">
          <View>
            <Text className="text-gray-900">Entire Place</Text>
            <Text className="text-gray-500">A place all to yourself</Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>

        <View className="flex-row items-center justify-between px-3 py-2">
          <View>
            <Text className="text-gray-900">Private room</Text>
            <Text className="text-gray-500">
              Your own room in a home or hotel, plus some shared common spaces
            </Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>

        <View className="flex-row items-center justify-between px-3 py-2">
          <View>
            <Text className="text-gray-900">Shared Room</Text>
            <Text className="text-gray-500">
              A sleeping space and areas that may be shared with others
            </Text>
          </View>
          <View>
            <Checkbox />
          </View>
        </View>
      </View>

      {/* Rooms and beds */}
      <View className="px-3 py-2 space-y-3 border-b border-gray-300">
        <Text className="font-semibold text-lg">Rooms and beds</Text>
        <View>
          <Text>Bedrooms</Text>
          <ScrollView
            className="flex-row space-x-2 mt-2"
            contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {bedroomsFilterList.map((roomCount) => {
              return (
                <View
                  key={roomCount}
                  className="rounded-3xl border border-gray-300"
                >
                  <Text className="py-2 px-4">{roomCount}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <Text>Beds</Text>
          <ScrollView
            className="flex-row space-x-2 mt-2"
            contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {bedroomsFilterList.map((roomCount) => {
              return (
                <View
                  key={roomCount}
                  className="rounded-3xl border border-gray-300"
                >
                  <Text className="py-2 px-4">{roomCount}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <Text>Bathrooms</Text>
          <ScrollView
            className="flex-row space-x-2 mt-2"
            contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {bedroomsFilterList.map((roomCount) => {
              return (
                <View
                  key={roomCount}
                  className="rounded-3xl border border-gray-300"
                >
                  <Text className="py-2 px-4">{roomCount}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>

      {/* Property Type */}
      <View className="px-3 py-2 space-y-3">
        <Text className="font-semibold text-lg">Property Type</Text>
        <ScrollView
          className="flex-row space-x-3"
          contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {propertyTypeList?.map((propertyItem) => {
            return (
              <View
                key={propertyItem.id}
                className="border border-gray-300 rounded-2xl py-4 pl-2 pr-14"
              >
                <propertyItem.icon size={30} color="gray" />
                <Text>{propertyItem.title}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* Amenities */}
      <View className="px-3 py-2 space-y-3">
        <Text className="font-semibold text-lg">Amenities</Text>
        <View className="space-y-2">
          {amenities.map((amenityItem) => {
            return (
              <View
                key={amenityItem.id}
                className="flex-row justify-between items-center"
              >
                <Text className="text-xl">{amenityItem.title}</Text>
                <Checkbox />
              </View>
            );
          })}
        </View>
      </View>

      {/* Booking Options */}
      <View className="px-3 py-2 space-y-3">
        <Text className="font-semibold text-lg">Booking Options</Text>
        <View className="space-y-2">
          {bookingOptions.map((bookingItem) => {
            return (
              <View key={bookingItem.id} className="flex-row justify-between">
                <View>
                  <Text className="text-gray-900">{bookingItem.title}</Text>
                  <Text className="text-gray-500">{bookingItem.desc}</Text>
                </View>
                <View>
                  <Switch />
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* Accessbility features */}
      <View className="px-3 py-2 space-y-3">
        <Text className="font-semibold text-lg">Accessibility features</Text>
        <View className="space-y-2">
          {accessibility.map((accessibilityItem) => {
            return (
              <View
                key={accessibilityItem.id}
                className="flex-row justify-between items-center"
              >
                <Text className="text-lg">{accessibilityItem.title}</Text>
                <Checkbox />
              </View>
            );
          })}
        </View>
      </View>

      {/* Top- tier stays */}
      <View className="px-3 py-2 space-y-3">
        <Text className="font-semibold text-lg">Top-tier stays</Text>
        <View className="space-y-2">
          {topTierStays.map((topTierItem) => {
            return (
              <View key={topTierItem.id} className="flex-row justify-between">
                <View>
                  <Text className="text-gray-900">{topTierItem.title}</Text>
                  <Text className="text-gray-500">{topTierItem.desc}</Text>
                </View>
                <View>
                  <Switch />
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* Host Language */}
      <View className="px-3 py-2 space-y-3">
        <Text className="font-semibold text-lg">Top-tier stays</Text>
        <View className="space-y-2">
          {hostLanguage.map((languageItem) => {
            return (
              <View key={languageItem.id}>
                <Text className="text-2xl">{languageItem.language}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
