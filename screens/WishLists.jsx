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
    <ScrollView className="mt-10">
      {items?.map((placeItem) => {
        return (
          <PlaceCard
            title={placeItem.title}
            star={placeItem.star}
            img={placeItem.img}
            price={placeItem.price}
          />
        );
      })}
    </ScrollView>
  );
}
