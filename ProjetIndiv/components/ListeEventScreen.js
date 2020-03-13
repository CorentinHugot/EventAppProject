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

import * as firebase from "firebase";
import config from "../helpers/config.js";

export default class ListeEventScreen extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
