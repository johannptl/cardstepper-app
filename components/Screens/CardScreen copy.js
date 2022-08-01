import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Carousel from "pinar";
import { Hr } from "../tags";

function renderContent(card, key) {
  if ( card.type == "textonly" ) {
    return (
      <View key={key} style={styles.card}>
        <View>
          <Text style={styles.heading}>{card.title}</Text>
        </View>
        <Hr/>
        <View>
          <Text>{card.content}</Text>
        </View>
      </View>
    );
  } else if ( card.type == "longtask" ) {
    return (
      <Carousel key={key} controlsButtonStyle={{display: "none"}} horizontal={false}>
        {card.content.map((longtask, i) => (
          <View key={i} style={styles.card}>
            <View>
              <Text style={[styles.heading, {fontSize: 25, marginBottom: 11,}]}>{longtask.title}</Text>
            </View>
            <Hr/>
             <View>
            <Text>{longtask.content}</Text>
          </View>
        </View>
        ))}
      </Carousel>
    );
  }
}
  
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 30,
    marginLeft: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 40,
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "flex-start",
  },
});

const CardView = (props) => {
  const card = props.content;
  return (
    <Carousel controlsButtonStyle={{display: "none"}} style={{ backgroundColor: "#efefef" }}>
      {card.map((card, i) => (
       renderContent(card, i)
        ))}
    </Carousel>
  );
};

export default CardView;