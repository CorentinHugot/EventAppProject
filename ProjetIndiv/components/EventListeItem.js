import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      press: false,
    };
  }

  render() {
    const event = this.props.event;
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.icons8.com/cute-clipart/64/000000/calendar",
          }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{event.titre}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={3}>
              {event.description}
            </Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date}>
              Le : {event.date} à {event.lieu}{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 125,
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    margin: 2,
  },
  content_container: {
    flex: 1,
    margin: 2,
    height: 120,
  },
  header_container: {
    flex: 2,
    flexDirection: "row",
    marginTop: 8,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    color: "#677179",
  },
  date: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#677179",
  },
  description_container: {
    flex: 4,
  },
  description_text: {
    fontStyle: "italic",
    color: "#677179",
    margin: 3,
  },
  date_container: {
    flex: 1,
    marginBottom: 20,
    justifyContent: "flex-start",
  },
});

export default EventItem;
