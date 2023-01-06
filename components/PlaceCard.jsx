import { View, Text, Image } from "react-native";
import React from "react";
import {
  StarIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
  XCircleIcon
} from "react-native-heroicons/outline";
import {XMarkIcon} from "react-native-heroicons/solid"
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlistPlace,
  removeWishlistPlace,
  selectedWishlistPlaces,
} from "../features/wishlist";
export default function PlaceCard({
  desc,
  img,
  location,
  title,
  star,
  price,
  total,
  long,
  lat,
}) {
  const dispatch = useDispatch();
  const items = useSelector(selectedWishlistPlaces);

  const isWishList = (title) => {
    const wishlistPlace = items.find((item) => item.title == title);
    console.log(wishlistPlace);
    return wishlistPlace;
  };
  return (
    <View className="py-2 relative">
      <Image
        source={{
          uri: img,
        }}
        className="w-full h-64 rounded-2xl"
      />
      <View className="absolute top-5 right-4 cursor-pointer">
        {
          isWishList(title) ? <XCircleIcon
          size={25}
          color={'white'}
          onPress={() =>
            dispatch(removeWishlistPlace({ title }))
          }
        /> : <HeartIcon
        size={25}
        color={'white'}
        onPress={() =>
          dispatch(addWishlistPlace({ img, title, star, price }))
        }
      />
        }
        {/* <HeartIcon
          size={25}
          color={isWishList(title) ? 'red' : 'yellow'}
          onPress={() =>
            dispatch(addWishlistPlace({ img, title, star, price }))
          }
        /> */}
      </View>
      <View className="flex-row justify-between">
        <Text className="font-medium">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={20} color="gray" />
          <Text>{star}</Text>
        </View>
      </View>
      <Text className="text-gray-600">134 Kilometer away</Text>
      <Text className="text-gray-600">11-16 Jan</Text>
      <Text>
        <Text className="text-gray-800 font-medium">{price}</Text>
      </Text>
    </View>
  );
}
