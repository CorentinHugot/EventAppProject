import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import event from "../helpers/EventData";
import EventListeItem from "./EventListeItem";
import firebase from "firebase";

export default class ListeEventScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      event: []
    };
  }

  componentWillMount = () => {
    const ref = firebase.database().ref("events");
    ref.on("value", snapshot => {
      this.setState({ event: snapshot.val() });
    });
  };

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={event}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DetailEvent", { item });
              }}
            >
              <EventListeItem event={item} />
            </TouchableOpacity>
          )}
        />
        <Text style={styles.margin}>
          Ici date de l'event 0 : {event[0].date}
        </Text>

        <FlatList
          data={this.state.event}
          keyExtractor={item => item.titre}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text>
                Titre : {item.titre} et date : {item.date}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  margin: {
    margin: 50
  }
});
