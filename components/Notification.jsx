import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

function Notification() {
  const notificationList = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
      notification:
        "Mayuri has a hosted a new hostel so checkout it's new house and enjoy your best moment.",
      timeDuration: "3 Days ago",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?w=826&t=st=1674559601~exp=1674560201~hmac=95bcb6ed38f0f84a6c3d1a9b6847580d4f4e5de252568bb969a1bb9f0dfe6a30",
      notification:
        "Your hotel are book so please checkout new bill and please confirm your booking",
      timeDuration: "5 month ago",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      notification:
        "Your krishna hotel booking are cancel we refund after 2-3 days business days",
      timeDuration: "2 hour ago",
    },
    {
      id: 4,
      image:
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
      notification:
        "hi,I'm roman regin your host and please confirm your booking",
      timeDuration: "1 day ago",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAD1_1vt5RmCnArxYx-wwynH_Tzu9qlS9yI_3FjFuPWzn-VTAQzdm08Zg0vI5gmLUlrNw&usqp=CAU",
      notification:
        "Your hotel are book so please checkout new bill and please confirm your booking",
      timeDuration: "2 month ago",
    },
  ];
  return (
    <ScrollView className="mt-5">
      <Text className="text-2xl font-semibold px-2">Your'e all caught up</Text>
      <View className="space-y-2">
        {notificationList.map((notificationItem) => {
          return (
            <TouchableOpacity key={notificationItem.id} className="flex-row px-2 py-2 space-x-2 border-b border-gray-400 mx-2">
              <View>
                <Image
                  source={{ uri: notificationItem.image }}
                  className="h-16 w-16 rounded-full"
                />
              </View>
              <View>
                <Text className="text-md">{notificationItem.notification}</Text>
                <Text className="text-gray-700">{notificationItem.timeDuration}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Notification;
