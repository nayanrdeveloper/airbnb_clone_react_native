import { View, Text } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function SearchExplore() {
  const navigation = useNavigation();
  return <View className="flex-row justify-between px-3 py-2 mx-3 border-2 rounded-full border-gray-200 shadow items-center">
    <MagnifyingGlassIcon size={20} color='black' />
    <View>
        <Text className="font-semibold text-lg text-gray-600" onPress={() => navigation.navigate('Search')}>Where To ?</Text>
        <Text className="text-gray-300">AnyWhere Any Week Add Guests</Text>
    </View>
    <View className="rounded-full border-2 border-gray-300 p-2">
        <AdjustmentsHorizontalIcon size={20} color='black' onPress={() => navigation.navigate('Filter')} />
    </View>
  </View>;
}
