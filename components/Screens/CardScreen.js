import React from "react";
import {
  Text,
  View,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Carousel from "pinar";
// import { Hr } from "../tags";
import { sizeH, sizeW } from "../size";
import { WHITE, BLACK, BACKGROUND, SHADOW } from "../colors";
import { useNavigation } from "@react-navigation/native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function RenderContent({ setPath, path, card, key }) {
  if (card.type == "textonly") {
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
  } else if (card.type == "longtask") {
    return (
      <Carousel
        key={key}
        controlsButtonStyle={{ display: "none" }}
        horizontal={false}
      >
        {card.content.map((longtask, i) => (
          <View key={i} style={styles.card}>
            <View>
              <Text
                style={[styles.heading, { fontSize: 25, marginBottom: 11 }]}
              >
                {longtask.title}
              </Text>
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
  } else if (card.type == "option") {
    return (
      <View key={key} style={styles.card}>
        <View>
          <Text style={styles.heading}>{card.title}</Text>
        </View>
        {
          //<Hr/>
        }
        <View>
          <Text>{card.description}</Text>
        </View>
        <View>
          <ScrollView>
            {card.content.map((option, i) => (
              <TouchableOpacity key={i} onPress={() => setPath(i)}>
                <View
                  style={{
                    marginTop: sizeH(10),
                    padding: 10,
                    backgroundColor: WHITE,
                    borderWidth: 2,
                    borderColor: "blue",
                    marginHorizontal: sizeW(20),
                    borderRadius: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: BLACK,
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: sizeW(60),
                    }}
                  >
                    {option.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  } else if (card.type == "pathOption") {
    if (card.content[path].type == "textonly") {
      return (
        <View key={key} style={styles.card}>
          <View>
            <Text style={styles.heading}>{card.content[path].title}</Text>
          </View>
          {
            //<Hr/>
          }
          <View>
            <Text>{card.content[path].content}</Text>
          </View>
        </View>
      );
    } else if (card.content[path].type == "longtask") {
      return (
        <Carousel
          key={key}
          controlsButtonStyle={{ display: "none" }}
          horizontal={false}
        >
          {card.content[path].content.map((longtask, i) => (
            <View key={i} style={styles.card}>
              <View>
                <Text
                  style={[styles.heading, { fontSize: 25, marginBottom: 11 }]}
                >
                  {longtask.title}
                </Text>
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
  return null;
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

function CardView({ content }) {
  const navigation = useNavigation();

  const [path, setPath] = React.useState(0);
  console.log(path);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(100).then(setRefreshing(false)).then(navigation.popToTop());
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: BACKGROUND }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title="back home"
        />
      }
    >
      <Carousel
        controlsButtonStyle={{ display: "none" }}
        style={{ backgroundColor: BACKGROUND, padding: 0, margin: 0 }}
      >
        {content.map((card, i) => (
          <RenderContent path={path} setPath={setPath} card={card} key={i} />
        ))}
      </Carousel>
    </ScrollView>
  );
}

export default CardView;
