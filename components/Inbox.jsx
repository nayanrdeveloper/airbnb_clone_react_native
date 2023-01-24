import React from "react";
import { ScrollView, Text, View } from "react-native";
import InboxCard from "./InboxCard";

function Inbox() {
  const messageList = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Soichi",
      desc: "Hi Soichi, thanks for intersted in out hotel",
      status: "Accepted",
      time: "1 month ago",
    },
    {
      id: 2,
      image:
        "https://thumbs.dreamstime.com/b/one-beautiful-female-caucasian-high-school-senior-girl-red-crop-top-sweater-one-beautiful-female-caucasain-high-school-senior-143152935.jpg",
      name: "Mayuri",
      desc: "Hi Soichi, thanks for intersted in out hotel",
      status: "Accepted",
      time: "1 month ago",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3s_tQh47BcBTFq0-_-uZmwIniv1GkjnOJlTAw7iYbjk6SBb8P2Yw63TcdRPa0r8shQw&usqp=CAU",
      name: "Alka Hadiyal",
      desc: "I sent a special offer to you. wow enjoy it",
      status: "Not Possible",
      time: "7 Days ago",
    },
  ];
  return (
    <ScrollView className="mt-5">
      <View>
        <Text className="text-2xl font-semibold px-2">
          You have no unread messages
        </Text>
        {messageList.map((messageItem) => {
          return (
            <InboxCard
              image={messageItem.image}
              key={messageItem.id}
              name={messageItem.name}
              desc={messageItem.desc}
              status={messageItem.status}
              time={messageItem.time}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Inbox;
