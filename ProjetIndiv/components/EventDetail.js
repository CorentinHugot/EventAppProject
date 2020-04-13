import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import navigation from "react-navigation";
import { BorderlessButton } from "react-native-gesture-handler";
import firebase from "firebase";

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: [] };
  }

  componentWillMount = () => {
    //je viens récupérer la liste des events de la bdd
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
        <View style={styles.container}>
          <Text>
            la tu utilises les données deg !
            {this.props.navigation.state.params.item.titre}
          </Text>
        </View>
        <View style={styles.container}>
          <Text>après la c'est du test firebase :</Text>
          <Text>Nombre d'events {this.state.event.length}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => {
              this._deleteEvent(); //à creer
            }}
          >
            <View>
              <Text style={styles.btnTxt}>Supprimer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => {
              this.props.navigation.navigate("ModifEvent", {
                titreEvent: this.props.navigation.state.params.item.titre,
              });
            }}
          >
            <View>
              <Text style={styles.btnTxt}>Modifier</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 125,
  },
  container: {
    flex: 1,
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

  btnTxt: {
    textAlign: "center",
    justifyContent: "center",
    color: "floralwhite",
    padding: 15,
  },
});
