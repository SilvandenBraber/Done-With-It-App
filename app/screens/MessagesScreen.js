import React, { useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";

import { useRefresh } from "../hooks";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import { RefreshingControl } from "../components/loadingAnimations";
import { Screen } from "../components/screenComponent";

const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description:
      "I'm willing to offer you $25 for this hat. What do you say about it? I really like it, and it would go perfectly with my new shoes!",
    image: require("../images/mosh.jpg"),
  },
  {
    id: 2,
    title: "Lisa Cahill",
    description: "Is this item still available?",
    image: require("../images/pfp.jpg"),
  },
  {
    id: 3,
    title: "John Black",
    description:
      "I am very happy with what you send me. The jersey is beautiful! :)",
    image: require("../images/pfp2.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const fetchMessages = () => {
    const updatedMessages = [
      {
        id: 4,
        title: "Ben Wanderson",
        description:
          "Hi! What's the asking price for those boots? Let's make a deal!",
        image: require("../images/portrait-pic1.avif"),
      },
      ...initialMessages,
    ];
    setMessages(updatedMessages);
  };

  const { refreshing, handleRefresh } = useRefresh(fetchMessages);

  const handleDelete = (message) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this conversation?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setMessages(messages.filter((m) => m.id !== message.id));
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            numberOfLines={2}
            onPress={() => console.log("Message selected: ", item)}
            onSwipeRight={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshControl={
          <RefreshingControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default MessagesScreen;
