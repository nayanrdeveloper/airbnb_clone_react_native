import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function InboxCard({ image, name, desc, time,status }) {
  return (
    <TouchableOpacity className="py-2 px-2 border-b flex-row space-x-2 border-gray-400 items-center">
      <View>
        <Image source={{ uri: image }} className="w-16 h-16 rounded-full" />
      </View>
      <View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-medium text-lg">{name}</Text>
          <Text className="text-gray-500">{time}</Text>
        </View>
        <Text className="text-gray-600">{desc}</Text>
        <Text className={status === 'Accepted' ? 'text-green-600' : 'text-red-600'}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}
