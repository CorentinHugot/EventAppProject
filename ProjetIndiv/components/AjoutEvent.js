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
    this.state = {
      titreEvent: "",
      dateEvent: "",
      id: "",
      evenement: ""
    };
  }

  componentWillMount = () => {
    const ref = firebase.database().ref("events");
    ref.on("value", snapshot => {
      this.setState({ evenement: snapshot.val() });
      this.setState({ id: this.state.evenement.length });
    });
  };

  _createEvent() {
    try {
      firebase
        .database()
        .ref("events/" + this.state.id)
        .set({
          title: this.state.titreEvent,
          date: this.state.dateEvent
        })
        .catch(error => {
          alert(error.message);
        });
    } catch (error) {
      alert(error);
    }
    alert("Event créé !");
  }

  render() {
    console.log(this.state.id);
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
          onPress={() => {
            this._createEvent();
            this.setState({ id: this.state.id + 1 });
            console.log(this.state.id);
          }}
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
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "blue",
    margin: 30
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  },
  titreApp: {
    margin: 20,
    fontSize: 30
  }
});
