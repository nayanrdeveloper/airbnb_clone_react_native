import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchExplore from "../components/SearchExplore";
import PlaceCategory from "../components/PlaceCategory";
import categoryList from "../data/categoryData";
import PlaceCard from "../components/PlaceCard";
import { useGetPlacesQuery } from "../features/placesApi";

export default function HomeScreen() {
  const {
    data: places,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPlacesQuery();
  const [categoryIndex, setCategoryIndex] = useState(1);
  return (
    <View className="mt-10 bg-white">
      <SearchExplore />
      <PlaceCategory
        categoryList={categoryList}
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
      />
      <ScrollView className="px-4 mt-5" showsVerticalScrollIndicator={false}>
        {places?.map((placeItem) => {
          return <PlaceCard
            key={placeItem.title}
            desc={placeItem.description}
            img={placeItem.img}
            location={placeItem.location}
            title={placeItem.title}
            star={placeItem.star}
            price={placeItem.price}
            total={placeItem.total}
            long={placeItem.long}
            lat={placeItem.lat}
          />;
        })}
      </ScrollView>
    </View>
  );
}
