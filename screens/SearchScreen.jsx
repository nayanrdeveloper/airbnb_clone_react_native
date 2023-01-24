import { View, Text, TextInput, ScrollView, Image, Button } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
  const mapImageList = [
    {
      image:
        "https://thumbs.dreamstime.com/z/map-europe-outline-design-isolate-white-map-europe-outline-design-isolate-white-119248642.jpg",
      title: "Europe",
      link: "",
      id: 1,
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/002/929/462/original/outline-australia-map-on-white-background-vector.jpg",
      title: "Australia",
      link: "",
      id: 2,
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/008/462/498/original/bangladesh-map-on-white-background-free-vector.jpg",
      title: "Bangladesh",
      link: "",
      id: 3,
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/south-africa-map-black-contour-260nw-745018537.jpg",
      title: "South africa",
      link: "",
      id: 4,
    },
    {
      image:
        "https://e7.pngegg.com/pngimages/253/38/png-clipart-great-britain-pine-map-history-map-of-uk-angle-white.png",
      title: "England",
      link: "",
      id: 5,
    },
  ];
  const navigation = useNavigation();
  return (
    <View className="mt-14 px-4 space-y-3 relative h-screen">
      <View className="bg-white px-2 py-2 space-y-2 rounded-md shadow">
        <View className="flex-row space-x-2 items-center">
          <XCircleIcon size={30} color="gray" onPress={() => navigation.navigate('Home')} />
          <Text className="text-3xl font-semibold">Where To?</Text>
        </View>
        <View className="flex-row items-center border-2 rounded-xl border-gray-400 px-2 py-1">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="I'm flexible" className="px-2 py-1" />
        </View>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {mapImageList?.map((mapItem) => {
            return (
              <View className="px-2 py-1 items-center" key={mapItem.id}>
                <Image
                  source={{
                    uri: mapItem.image,
                  }}
                  className="h-32 w-32 rounded-xl"
                />
                <Text>{mapItem.title}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View className="justify-between items-center flex-row bg-white px-4 py-4 border border-gray-200 rounded-2xl shadow">
        <Text className="text-gray-300 text-xl">when</Text>
        <Text>Any Week</Text>
      </View>
      <View className="justify-between items-center flex-row bg-white px-4 py-4 border border-gray-200 rounded-2xl shadow">
        <Text className="text-gray-300 text-xl">who</Text>
        <Text>Add Guests</Text>
      </View>
      {/* <View className="flex-row justify-between bg-white items-center px-4 py-4 border border-gray-200 rounded-2xl shadow">
        <Text className="border-b border-gray-300 pb-1">Clear All</Text>
        <Button
          // onPress={onPressLearnMore}
          title="Log In"
          color="#F24B5B"
          accessibilityLabel="Log In for Trip your way"
        />
      </View> */}
      <View className="absolute bottom-5 left-3 w-full flex-row justify-between bg-white items-center px-4 py-4 border border-gray-200 rounded-2xl shadow">
        <Text className="border-b border-gray-300 pb-1">Clear All</Text>
        <View className="flex-row space-x-1 py-2 px-4 bg-[#F24B5B] rounded-lg">
          <MagnifyingGlassIcon size={20} color="white" />
          <Text className="text-white">Search</Text>
        </View>
        {/* <Button
          // onPress={onPressLearnMore}
          title="Log In"
          color="#F24B5B"
          accessibilityLabel="Log In for Trip your way"
        /> */}
      </View>
    </View>
  );
}
