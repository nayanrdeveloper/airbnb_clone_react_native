import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";

export default function TripScreen() {
  return (
    <SafeAreaView className="mt-10 px-4">
      <Text className="text-3xl font-semibold border-b pb-3 border-gray-300">
        Trips
      </Text>
      <View className="py-10 space-y-4 border-b border-gray-300">
        <Text className="text-2xl font-semibold">No Trips booked... yet</Text>
        <Text>
          Time to dust off your bags and start plannig your next advanture
        </Text>
        <View className="py-3 px-5 border border-black w-40 rounded-xl">
          <Text>Start Searching</Text>
        </View>
      </View>
      <View className="flex-row py-10">
        <Text>Can't find your reservation here? </Text>
        <Text className="border-b font-medium">Visit the help center</Text>
      </View>
    </SafeAreaView>
  );
}
