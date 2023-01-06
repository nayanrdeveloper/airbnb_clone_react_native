import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";


export default function PlaceCategory({
  categoryList,
  categoryIndex,
  setCategoryIndex,
}) {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="border-b pb-3 border-gray-300"
    >
      {categoryList?.map((categoryItem) => {
        return (
          <TouchableOpacity
            onPress={() => setCategoryIndex(categoryItem.id)}
            key={categoryItem.id}
            className={`px-2 items-center py-3 ${
              categoryIndex === categoryItem.id ? "border-b pb-5    " : ""
            } `}
          >
            <Image
              source={{ uri: categoryItem.icon }}
              className={`w-6 h-6 ${
                categoryIndex === categoryItem.id ? "" : "opacity-70"
              }`}
            />
            <Text
              className={
                categoryIndex === categoryItem.id
                  ? "text-black"
                  : "text-gray-500"
              }
            >
              {categoryItem.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
