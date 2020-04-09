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
import ModifEvent from "./ModifEvent";
import firebase from "firebase";

export default class ListeEventScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      event: [],
    };
  }

  componentWillMount = () => {
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ event: snapshot.val() });
    });
  };

  _deleteEvent = () => {
    firebase.database().ref("event/idevent").remove();
  };

  render() {
    return (
      <View style={styles.main_container}>
        {/* <FlatList
          data={this.state.event}
          keyExtractor={item => item.item.titre}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DetailEvent", { item });
              }}
            >
              <EventListeItem event={item} />
            </TouchableOpacity>
          )}
        /> */}

        <FlatList
          data={this.state.event}
          keyExtractor={(item) => item.titre}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <EventListeItem event={item} />
            </TouchableOpacity>
          )}
        />
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => {
              this._deleteEvent(); //à creer
            }}
          >
            <View>
              <Text>Supprimer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => {
              this.props.navigation.navigate("ModifEvent", { item });
            }}
          >
            <View>
              <Text>Modifier</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buton}
          onPress={() => {
            this.props.navigation.navigate("DetailEvent", { item });
          }}
        >
          <View>
            <Text>Détail</Text>
          </View>
        </TouchableOpacity>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  buton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "blue",
    margin: 20,
  },
});
