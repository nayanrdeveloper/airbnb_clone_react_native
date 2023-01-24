import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  ArrowUpOnSquareIcon,
  HeartIcon,
  StarIcon,
  HomeIcon,
  CalendarIcon,
  KeyIcon,
  PhotoIcon,
  GlobeAsiaAustraliaIcon,
  WifiIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function PlaceDetailScreen() {
  const featureList = [
    {
      id: 1,
      title: "Menni is a Superhost",
      desc: "Superhost are experienced higley rated hosts who are commited to providing greate says for their guests",
      icon: HomeIcon,
    },
    {
      id: 2,
      title: "Great Check in expereince",
      desc: "100% of recent guests gave the check in process a 5-star rating",
      icon: KeyIcon,
    },
    {
      id: 3,
      title: "Free cancelletion before 29 march",
      desc: "",
      icon: CalendarIcon,
    },
  ];

  const offerList = [
    {
      id: 1,
      title: "Sea view",
      icon: PhotoIcon,
    },
    {
      id: 2,
      title: "Beach Access Beachfront",
      icon: GlobeAsiaAustraliaIcon,
    },
    {
      id: 3,
      title: "Wifi",
      icon: WifiIcon,
    },
    {
      id: 4,
      title: "Free on street Parking",
      icon: TruckIcon,
    },
    {
      id: 5,
      title: "Security camera on Property",
      icon: ShieldCheckIcon,
    },
  ];

  const reviewList = [
    {
      id: 1,
      user: "Lolita",
      userImage:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      time: "3 month ago",
      comment:
        "peaceful nest - away from the city - calm and quiet - beautiful sunset and huge property exactly as described in the pics",
    },
    {
      id: 2,
      user: "Mayur Patel",
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zDLmDqyxWlfj0UTDEKX4LVmuH8IlPbQVWZk-rN1XwAdbJYQwfoB-RD5Lk2ViccpKtbE&usqp=CAU",
      time: "10 days ago",
      comment:
        "We stayed at the lesser florican room at Vihang farm stay. The views from our particular room and sit out were beautiful. Even though the place is only 15 mins from Nashik city, it felt",
    },
    {
      id: 3,
      user: "Krishna radha",
      userImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      time: "2 week ago",
      comment:
        "Lovely place and the staff was really helpful. One of the best place to stay near Sula.",
    },
    {
      id: 4,
      user: "Alexa Bliss",
      userImage:
        "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      time: "1 day ago",
      comment:
        "This place is very nice for a quiet holiday. The staff are also very good .But, one should have their private vehicle to visit this place.",
    },
  ];
  const navigator = useNavigation();
  return (
    <ScrollView className="mt-10">
      <View className="relative bg-white">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          }}
          className="h-48 w-full"
        />
        {/* <View className="absolute top-5 left-3 items-center"> */}
        <View className="absolute top-5 left-3">
          <ArrowLeftIcon
            size={35}
            color="white"
            className="p-4 rounded-full bg-white"
            onPress={() => navigator.goBack()}
          />
        </View>
        <View className="flex-row absolute top-5 right-3 space-x-2">
          <ArrowUpOnSquareIcon size={35} color="white" />
          <HeartIcon size={35} color="white" />
        </View>
        {/* </View> */}
      </View>

      <View className="px-3 border-b border-gray-300 py-4">
        <Text className="text-2xl font-medium">
          Privaati saari / Private isalnd
        </Text>
        <View className="flex-row space-x-2 items-center">
          <View className="flex-row items-center">
            <StarIcon size={20} color="gray" />
            <Text>4.95</Text>
          </View>
          <Text>20 reviews</Text>
          <View className="flex-row space-x-1 items-center">
            <HomeIcon size={20} color="gray" />
            <Text>SuperHost</Text>
          </View>
        </View>
      </View>

      <View className="py-2 border-b border-gray-300 px-3">
        <View className="flex-row justify-between items-center">
          <Text>Isalnd hosted ny Menni</Text>
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/one-beautiful-female-caucasian-high-school-senior-girl-red-crop-top-sweater-one-beautiful-female-caucasain-high-school-senior-143152935.jpg",
            }}
            className="h-12 w-12 rounded-full"
          />
        </View>
        <View>
          <Text>8 Guests 4 Bedrooms 7 Beds 1 Bathroom</Text>
        </View>
      </View>

      <View className="py-2 border-b border-gray-300 px-3">
        {featureList.map((featureItem) => {
          return (
            <View key={featureItem.id} className="">
              <View className="flex-row items-center space-x-2">
                <featureItem.icon size={20} color="gray" />
                <Text className="text-xl text-gray-700 font-medium">
                  {featureItem.title}
                </Text>
              </View>
              <View className="ml-7">
                <Text>{featureItem.desc}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <View className="py-2 border-b border-gray-300 px-3">
        <Text className="font-medium text-2xl text-gray-700">
          What this place Offers
        </Text>
        <View className="space-y-2 mt-3">
          {offerList.map((offerItem) => {
            return (
              <View
                key={offerItem.id}
                className="flex-row justify-between items-center"
              >
                <Text>{offerItem.title}</Text>
                <offerItem.icon size={20} color="gray" />
              </View>
            );
          })}
        </View>
        <View className="px-4 py-2 border border-gray-400 rounded-md mt-5">
          <Text className="text-center">Show All 46 amenities</Text>
        </View>

        <View className="py-2 border-b border-gray-300 px-3">
          <View className="flex-row space-x-2 items-center">
            <StarIcon size={20} color="gray" />
            <Text className="font-medium text-gray-800 text-lg">
              4.95 20 reviews
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={{ paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-2"
          >
            {reviewList.map((reviewItem) => {
              return (
                <View
                  key={reviewItem.id}
                  className="border border-gray-300 rounded-lg w-52 py-2 px-2"
                >
                  <View className="flex-row space-x-2">
                    <Image
                      source={{ uri: reviewItem.userImage }}
                      className="h-12 w-12 rounded-full"
                    />
                    <View className="">
                      <Text>{reviewItem.user}</Text>
                      <Text>{reviewItem.time}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{reviewItem.comment.substring(0, 100)}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View className="px-4 py-2 border border-gray-400 rounded-md mt-5">
            <Text className="text-center">Show All 20 review</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
