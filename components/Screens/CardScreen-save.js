import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardView = (props) => {
  const Cards = props.content;
  return (
    <View
      style={{
        backgroundColor: "#F8F8FF",
      }}
    >
      <ScrollView
        // onScroll={handleScroll}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        // contentOffset={() => ({ ScrollRight })}
        // contentOffset={ScrollRight()}
      >
        {Cards.map((card, i) => (
          <View
            style={{
              backgroundColor: "#F8F8FF",
              width: Dimensions.get("window").width,
            }}
            key={i}
          >
            <View
              style={{
                borderWidth: 1,
                marginTop: 20,
                margin: 10,
                paddingBottom: Dimensions.get("window").height - 125 - 70,
                borderRadius: 20,
              }}
            >
              <View style={{ marginTop: 20, marginLeft: 0 }}>
                <Text
                  style={{
                    fontSize: 30,
                    paddingLeft: 20,
                    marginTop: 0,
                    paddingTop: 0,
                    padding: 0,
                    color: "black",
                    //borderWidth: 1,
                  }}
                >
                  {card.title}
                </Text>
              </View>
              <View
                style={{
                  color: "black",
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <Text>{card.content}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: "#F8F8FF",
          width: Dimensions.get("window").width,
          height: 65,
        }}
      >
        <View
          style={{
            width: Dimensions.get("window").width / 3,
            position: "absolute",
            height: 65,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 65,
            }}
          >
            <FontAwesome5 name="arrow-left" size={40}></FontAwesome5>
          </View>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width / 3,
            marginLeft: Dimensions.get("window").width / 3,
            position: "absolute",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 65,
            }}
          >
            <FontAwesome5 name="heart" size={40}></FontAwesome5>
          </View>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width / 3,
            marginLeft: (Dimensions.get("window").width / 3) * 2,
            position: "absolute",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 65,
            }}
            onPress={() => {
              // ScrollRight(true);
            }}
          >
            <FontAwesome5 name="arrow-right" size={40}></FontAwesome5>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
/*
function handleScroll(event) {
  console.log("x: ", event.nativeEvent.contentOffset.x);
  return event.nativeEvent.contentOffset.x;
}

const ScrollRight = (press) => {
  if (press) {
    console.log("pressed");
    return { x: 375, y: 0 };
  }
  return { x: 0, y: 0 };
};
*/
export default CardView;
