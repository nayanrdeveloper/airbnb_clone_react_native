import { View, Text, Button, Image, ScrollView } from "react-native";
import React from "react";
import {
  HomeIcon,
  Cog8ToothIcon,
  HomeModernIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChevronRightIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  LanguageIcon,
  BellIcon,
  LockClosedIcon,
  BriefcaseIcon,
  DocumentPlusIcon,
  GlobeAltIcon,
} from "react-native-heroicons/outline";

export default function LogInScreen() {
  const accountSettingsList = [
    {
      header: "Account Settings",
      menuItems: [
        {
          title: "Personal Information",
          icon: HomeIcon,
          link: "/",
        },
        {
          title: "Login & Security",
          icon: ShieldCheckIcon,
          link: "/",
        },
        {
          title: "Payments and payouts",
          icon: BanknotesIcon,
          link: "/",
        },
        {
          title: "Translation",
          icon: LanguageIcon,
          link: "",
        },
        {
          title: "Notification",
          icon: BellIcon,
          link: "",
        },
        {
          title: "Privacy and Sharing",
          icon: LockClosedIcon,
          link: "",
        },
        {
          title: "Travel for Work",
          icon: BriefcaseIcon,
          link: "",
        },
      ],
    },
    {
      header: "Hosting",
      menuItems: [
        {
          title: "List your Space",
          icon: HomeIcon,
          link: "/",
        },
        {
          title: "Learn about hosting",
          icon: HomeIcon,
          link: "/",
        },
        {
          title: "Host an Experience",
          icon: HomeIcon,
          link: "/",
        },
      ],
    },
    {
      header: "Legal",
      menuItems: [
        {
          title: "Terms of Service",
          icon: BookOpenIcon,
          link: "/",
        },
        {
          title: "Privacy Policy",
          icon: BookOpenIcon,
          link: "/",
        },
      ],
    },
  ];
  return (
    <ScrollView className="mt-10 bg-white px-4 space-y-2">
      <Text className="text-3xl text-dark-600 font-semibold">Profile</Text>
      {/* User Data */}
      <View className="flex-row pb-2 justify-between items-center border-b border-gray-300">
        <View className="flex-row items-center space-x-3">
          <UserCircleIcon size={40} color="black" />
          <View>
            <Text className="text-xl font-medium">Nayan Radadiya</Text>
            <Text className="text-sm text-gray-600">Show Profile</Text>
          </View>
        </View>
        <View>
          <ChevronRightIcon size={20} color="black" />
        </View>
      </View>

      {/*  */}
      <View className="px-3 py-2 flex-row justify-between border shadow border-gray-200 rounded-2xl">
        <View className="my-auto">
          <Text className="text-xl font-medium">Airbnb Your Place</Text>
          <Text className="text-sm w-40">
            It's simple to get up and start earning
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1158713117/photo/brown-two-story-all-american-home.jpg?s=612x612&w=0&k=20&c=PRsPVVX1JK8Dy0Aa_QQ46EKMO32G8QzK2x5nRjNlyhU=",
            }}
            className="w-28 h-28 rounded-md"
          />
        </View>
      </View>

      {/* <Text className="text-lg text-gray-500">
        Log in start planning your next up
      </Text>

      <View className="mt-5">
        <Button
          // onPress={onPressLearnMore}
          title="Log In"
          color="#F24B5B"
          accessibilityLabel="Log In for Trip your way"
        />
      </View>
      <Text>Don't have account ? Sign Up</Text> */}
      {/* Settings */}
      <View className="py-10 space-y-3">
        {accountSettingsList?.map((accountItem) => {
          return (
            <View key={accountItem.header}>
              <Text className="font-bold text-xl text-gray-500 ">{accountItem.header}</Text>
              {accountItem.menuItems.map((menuItem) => {
                return <View key={menuItem.title} className="flex-row justify-between mt-3 items-center border-b border-gray-300 pb-3">
                  <View className="flex-row items-center space-x-2">
                    <menuItem.icon size={25} color="gray" />
                    <Text className="text-xl text-gray-500">
                      {menuItem.title}
                    </Text>
                  </View>
                  <View>
                    <ChevronRightIcon size={25} color="gray" />
                  </View>
                </View>;
              })}
            </View>
          );
        })}
      </View>
      <Text className="text-sm text-gray-400">Version 22.50.1(26008971)</Text>
    </ScrollView>
  );
}
