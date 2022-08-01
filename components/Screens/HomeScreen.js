import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardView from "./CardScreen";
import { sizeH, sizeW } from "../size";
import { WHITE, BLACK, BACKGROUND, SHADOW } from "../colors";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizeH(20),
    backgroundColor: BACKGROUND,
  },
  item: {
    marginTop: sizeH(10),
    padding: 10,
    backgroundColor: WHITE,
    marginHorizontal: sizeW(20),
    borderRadius: 10,
    shadowColor: SHADOW,
    shadowOpacity: 0.06,
    shadowOffset: {
      with: sizeW(10),
      height: sizeH(10),
    },
  },
  title: {
    fontSize: 28,
  },
  author: {
    flex: 1,
    right: sizeW(15),
    textAlign: "right",
    position: "absolute",
    top: "50%",
  },
});

const Stack = createNativeStackNavigator();
const cards = require("./../cards/cards.json");

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectCard"
        component={SelectCard}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Card"
        component={Card}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

function Card({ navigation, route }) {
  return <CardView content={route.params.content} />;
}

function SelectCard({ navigation }) {
  const [search, setSearch] = useState("");
  
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <SearchBar
        platform="ios"
        inputStyle={{backgroundColor: WHITE}}
        inputContainerStyle={{backgroundColor: WHITE, padding: 0, margin: 0}}
        containerStyle={[styles.item, { borderWidth: 0 }]}
        placeholder="Search for Cards ..."
        onChangeText={updateSearch}
        value={search}
      />
        {cards.map((card, i) => (
          <TouchableOpacity
            style={{
              display: getItemVisibility(card.title, card.author, card.id, search),
            }}
            onPress={() =>
              navigation.navigate("Card", {
                content: card.content,
              })
            }
            key={i}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.author}>{card.author}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function getItemVisibility(title, author, id, search) {
  if (title.includes(search) || author.includes(search)) {
    return "flex";
  }
  return "none"
}

export default HomeScreen;
