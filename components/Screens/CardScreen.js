import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Carousel from "pinar";
// import { Hr } from "../tags";
import { sizeH, sizeW } from "../size";
import { WHITE, BLACK, BACKGROUND, SHADOW } from "../colors";

function renderContent(card, key) {
  if ( card.type == "textonly" ) {
    return (
      <View key={key} style={styles.card}>
        <View>
          <Text style={styles.heading}>{card.title}</Text>
        </View>
        {
          //<Hr/>
        }
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
              {
                //<Hr/>
              }
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
    marginTop: sizeH(30),
    marginLeft: sizeW(10),
    marginBottom: sizeH(5),
  },
  card: {
    backgroundColor: WHITE,
    borderRadius: 40,
    width: sizeW(335),
    shadowColor: SHADOW,
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {
      height: sizeH(1),
      width: sizeW(1),
    },
    flex: 1,
    marginTop: sizeH(30),
    marginBottom: sizeH(30),
    marginLeft: sizeW(20),
    alignItems: "flex-start",
  },
});

const CardView = (props) => {
  const card = props.content;
  return (
    <Carousel controlsButtonStyle={{display: "none"}} style={{ backgroundColor: BACKGROUND }}>
      {card.map((card, i) => (
       renderContent(card, i)
        ))}
    </Carousel>
  );
};

export default CardView;