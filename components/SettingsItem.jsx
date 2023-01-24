import { View, Text } from "react-native";
import React from "react";
import {ChevronRightIcon} from "react-native-heroicons/outline";

export default function SettingsItem({title,icon,link}) {
    console.log(icon);
  return (
    <View className="flex-row justify-between items-center border-b border-gray-300 pb-3">
      <View className="flex-row items-center space-x-2">
        {/* <{icon} size={25} color="gray" /> */}
        <Text className="text-xl text-gray-500">{title}</Text>
      </View>
      <View>
        <ChevronRightIcon size={25} color="gray" />
      </View>
    </View>
  );
}
