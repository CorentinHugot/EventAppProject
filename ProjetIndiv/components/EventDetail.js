import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import navigation from "react-navigation";
import { BorderlessButton } from "react-native-gesture-handler";
import firebase from "firebase";

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: [], idEvent: "" };
  }

  UNSAFE_componentWillMount = () => {
    //je viens récupérer la liste des events de la bdd
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ event: snapshot.val() });
    });
  };

  UNSAFE_componentWillMount = () => {
    // je viens chercher l'id de l'event dans lequel je me trouve
    try {
      const ref = firebase.database().ref("events");
      ref
        .orderByChild("titre")
        .equalTo(this.props.navigation.state.params.item.titre)
        .once("value", (snapshot) => {
          result = snapshot.val();
          key = Object.keys(result);
          this.setState({ idEvent: key });
        });
    } catch (err) {
      alert(err);
    }
  };

  componentWillUnmount = () => {};

  _deleteEvent = (ev) => {
    try {
      firebase
        .database()
        .ref(ev)
        .remove()
        .catch((error) => {
          alert(error.message);
        });
      alert("Evenement Suprimmé");
      this.props.navigation.navigate("ListeEvent");
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.content_container}>
          <View
            style={{
              height: 2,
              width: 500,
              backgroundColor: "#008B8B",
              marginTop: 40,
            }}
          ></View>
          <Text style={styles.t2}>
            {this.props.navigation.state.params.item.titre}
          </Text>
          <View
            style={{
              height: 2,
              width: 500,
              backgroundColor: "#008B8B",
              marginBottom: 20,
            }}
          ></View>
          <Text style={{ textAlign: "right", fontSize: 16 }}>
            Event : {this.state.idEvent}
          </Text>
          <View
            style={{
              margin: 15,
              width: 320,
              backgroundColor: "white",
              height: 150,
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
            }}
          >
            <Text style={styles.t1}>
              {" "}
              {this.props.navigation.state.params.item.description}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.default_text}>
              Date : {this.props.navigation.state.params.item.date}
            </Text>
            <Text style={styles.default_text}>
              Lieu : {this.props.navigation.state.params.item.date}
            </Text>
          </View>
          <View
            style={{
              height: 2,
              width: 300,
              backgroundColor: "#008B8B",
              margin: 25,
            }}
          ></View>
          <Text style={styles.default_text}>
            Nombre de personnes attendues :{" "}
            {this.props.navigation.state.params.item.gens}
          </Text>
          <View
            style={{
              height: 2,
              width: 300,
              backgroundColor: "#008B8B",
              margin: 25,
            }}
          ></View>
          <Text style={styles.default_text}>
            Sécurité prévue : {this.props.navigation.state.params.item.nbagents}{" "}
            agents
          </Text>
          <Text style={styles.default_text}>
            Nombres de navettes au départ :{" "}
            {this.props.navigation.state.params.item.nbnavettes}
          </Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => {
              try {
                this._deleteEvent("events/" + this.state.idEvent);
              } catch (err) {
                alert(err);
              }
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
    flex: 1,
    margin: "auto",
    alignItems: "center",
    backgroundColor: "#E8F6F3",
    justifyContent: "center",
  },
  content_container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    backgroundColor: "#E8F6F3",
  },
  t2: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#008B8B",
    margin: 25,
  },
  t1: {
    textAlign: "center",
    margin: 2,
    fontSize: 16,
    color: "#677179",
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
    backgroundColor: "#008B8B",
    margin: 20,
  },
  btnTxt: {
    textAlign: "center",
    justifyContent: "center",
    color: "floralwhite",
    padding: 15,
  },
  image: {
    height: 169,
    margin: 5,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  favorite_container: {
    alignItems: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
});
