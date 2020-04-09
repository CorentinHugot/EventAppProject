import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import firebase from "firebase";

export default class ModifEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titreEvent: "",
      dateEvent: "",
      lieuEvent: "",
      agents: "",
      navettes: "",
      id: 0,
      evenement: "",
    };
  }

  componentWillMount = () => {
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ id: snapshot.numChildren() });
      // this.setState({ id: this.state.evenement.length + 1 }); c'est de la merde ce truc le num children fait ca oklm
    });
  };

  _modifEvent = () => {
    firebase.database().ref("event/idevent").update({
      titre: this.state.titreEvent,
      date: this.state.dateEvent,
      lieu: this.state.lieuEvent,
      nbagents: this.state.agents,
      nbnavettes: this.state.navettes,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titreApp}>Modifier mon Evenement</Text>
        <View style={styles.row}>
          <Text> Nom de l'event : </Text>
          <TextInput
            style={styles.input}
            placeholder="Nom event"
            underlineColorAndroid="transparent"
            onChangeText={(titreEvent) => this.setState({ titreEvent })}
          />
        </View>
        <View style={styles.row}>
          <Text> Lieu </Text>
          <TextInput
            style={styles.input}
            placeholder="Lieu"
            underlineColorAndroid="transparent"
            onChangeText={(lieuEvent) => this.setState({ lieuEvent })}
          />
        </View>
        <View style={styles.row}>
          <Text> Date : </Text>
          <TextInput
            style={styles.input}
            placeholder="../../...."
            underlineColorAndroid="transparent"
            onChangeText={(dateEvent) => this.setState({ dateEvent })}
          />
        </View>
        <View style={styles.row}>
          <Text> Agents </Text>
          <TextInput
            style={styles.input}
            placeholder="Agents sécu"
            underlineColorAndroid="transparent"
            onChangeText={(agents) => this.setState({ agents })}
          />
        </View>
        <View style={styles.row}>
          <Text> Navettes : </Text>
          <TextInput
            style={styles.input}
            placeholder="1 pour 40 pers"
            underlineColorAndroid="transparent"
            onChangeText={(navettes) => this.setState({ navettes })}
          />
        </View>
        <TouchableOpacity
          style={styles.buton}
          onPress={() => {
            this._modifEvent();
          }}
        >
          <View>
            <Text>Update mon event</Text>
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
    backgroundColor: "#F5F5F5",
  },
  buton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "blue",
    margin: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  titreApp: {
    margin: 20,
    fontSize: 30,
  },
});