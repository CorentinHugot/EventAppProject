import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class EventItem extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <View style={styles.main_container}>
        <Image style={styles.image} source={require("../images/rblogo.png")} />
        {/* event.image ca serait cool a la place du logo de rb partout mais wallah ca marche pas */}
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Titre : {event.titre}</Text>
            <Text style={styles.vote_text}>Lieu : {event.lieu} </Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              Nombre d'agents de sécurité : {event.nbagents}
            </Text>
            <Text style={styles.description_text} numberOfLines={6}>
              Nombre de navettes : {event.nbnavettes}
            </Text>

            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Le : {event.date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 125,
    flexDirection: "row"
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: "row"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#666666"
  },
  description_container: {
    flex: 7,
    marginTop: 3
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 14
  }
});

export default EventItem;
