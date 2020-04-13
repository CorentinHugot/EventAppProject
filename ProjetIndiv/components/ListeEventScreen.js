import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import EventListeItem from "./EventListeItem";
import * as firebase from "firebase";

export default class ListeEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: [] };
  }

  UNSAFE_componentWillMount = () => {
    //je viens récupérer la liste des events de la bdd
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ event: snapshot.val() });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.event}
          keyExtractor={(item) => item.titre}
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
    flex: 1,
  },
  margin: {
    margin: 20,
  },
});
