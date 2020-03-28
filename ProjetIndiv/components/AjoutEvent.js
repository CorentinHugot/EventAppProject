import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import firebase from "firebase";

export default class AjoutEvent extends React.Component {
  constructor(props) {
    super(props);
    state = {
      titreEvent: "",
      dateEvent: ""
    };
  }

  _createEvent() {
    firebase
      .database()
      .ref("events/")
      .set({
        title: this.state.titreEvent,
        date: this.state.dateEvent
      })
      .alert(() => {
        console.log("Evenement Créé dans ta BDD frr");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(firebase);
    return (
      <View style={styles.container}>
        <Text style={styles.titreApp}>Création d'un Evenement</Text>
        <View style={styles.row}>
          <Text> Nom de l'event : </Text>
          <TextInput
            style={styles.input}
            placeholder="Nom event"
            underlineColorAndroid="transparent"
            onChangeText={titreEvent => this.setState({ titreEvent })}
          />
        </View>
        <View style={styles.row}>
          <Text> Date : </Text>
          <TextInput
            style={styles.input}
            placeholder="../../...."
            underlineColorAndroid="transparent"
            onChangeText={dateEvent => this.setState({ dateEvent })}
          />
        </View>
        <TouchableOpacity
          style={styles.buton}
          onPress={() => this._createEvent()}
        >
          <View>
            <Text>Créer mon event</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },
  buton: {
    backgroundColor: "blue",
    margin: 20
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  },
  titreApp: {
    margin: 20,
    fontSize: 40
  }
});
