import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addWishlistPlace,
  removeWishlistPlace,
  selectedWishlistPlaces,
} from "../features/wishlist";
import PlaceCard from "../components/PlaceCard";

export default function WishLists() {
  const items = useSelector(selectedWishlistPlaces);
  console.log(items);
  return (
    <ScrollView className="mt-10 px-3">
      <Text className="text-3xl font-semibold border-b pb-3 border-gray-300">
        Wish List
      </Text>
      <View className="mt-3 space-y-1">
        {items?.map((placeItem, index) => {
          return (
            <PlaceCard
              key={index}
              title={placeItem.title}
              star={placeItem.star}
              img={placeItem.img}
              price={placeItem.price}
            />
          );
        })}
      </View>
      {items.length < 1 && (
        <View>
          <Text className="text-3xl text-gray-800">
            You have no added Favorite
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
