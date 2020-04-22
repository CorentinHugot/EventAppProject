import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
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
      idEvent: "",
      description: "",
      people: "",
    };
  }

  //recupération de l'identifiant de l'evenement
  UNSAFE_componentWillMount = () => {
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ id: snapshot.numChildren() });
      // this.setState({ id: this.state.evenement.length + 1 }); c'est de la merde ce truc le num children fait ca oklm
    });
  };

  UNSAFE_componentWillMount = () => {
    // je viens chercher l'id de l'event dans lequel je me trouve
    try {
      const ref = firebase.database().ref("events");
      ref
        .orderByChild("titre")
        .equalTo(this.props.navigation.state.params.titreEvent)
        .once("value", (snapshot) => {
          result = snapshot.val();
          key = Object.keys(result);
          this.setState({ idEvent: key });
        });
    } catch (err) {
      alert(err);
    }
  };

  //fonction de modification de l'evenement
  _modifEvent = (ev) => {
    firebase.database().ref(ev).update({
      titre: this.state.titreEvent,
      date: this.state.dateEvent,
      lieu: this.state.lieuEvent,
      nbagents: this.state.agents,
      nbnavettes: this.state.navettes,
      description: this.state.description,
      people: this.state.people,
    });
    alert("Evenement Modifié");
    this.props.navigation.navigate("ListeEvent");
  };

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.row_container}>
          <Text style={styles.t2}>
            Tu souhaites modifer l'event{" "}
            {this.props.navigation.state.params.titreEvent} ?
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.t1}> Nom de l'event : </Text>
          <TextInput
            style={styles.t1}
            placeholder="Event Title"
            underlineColorAndroid="transparent"
            onChangeText={(titreEvent) => this.setState({ titreEvent })}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.t1}> Lieu :</Text>
            <TextInput
              style={styles.t1}
              placeholder="Place"
              underlineColorAndroid="transparent"
              onChangeText={(lieuEvent) => this.setState({ lieuEvent })}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.t1}> Date : </Text>
            <TextInput
              style={styles.t1}
              placeholder="../../...."
              underlineColorAndroid="transparent"
              onChangeText={(dateEvent) => this.setState({ dateEvent })}
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.t1}> Description :</Text>
          <TextInput
            style={styles.description}
            placeholder="Short resume"
            underlineColorAndroid="transparent"
            backgroundColor="white"
            onChangeText={(description) => this.setState({ description })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.t1}> How many people : </Text>
          <TextInput
            style={styles.t1}
            placeholder="300"
            underlineColorAndroid="transparent"
            onChangeText={(people) => this.setState({ people })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.t1}> Sécurité : </Text>
          <TextInput
            style={styles.t1}
            placeholder="X agents"
            underlineColorAndroid="transparent"
            onChangeText={(agents) => this.setState({ agents })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.t1}> Navettes : </Text>
          <TextInput
            style={styles.t1}
            placeholder="1/40 pax"
            underlineColorAndroid="transparent"
            onChangeText={(navettes) => this.setState({ navettes })}
          />
        </View>
        <View style={styles.but}>
          <Button
            style={styles.but}
            title="Modifier cet event"
            color="#008B8B"
            onPress={() => {
              this._modifEvent("events/" + this.state.idEvent);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8F6F3",
    justifyContent: "center",
  },
  t2: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#008B8B",
    marginBottom: 20,
  },
  t1: {
    textAlign: "center",
    margin: 2,
    fontSize: 16,
    marginBottom: 10,
  },
  but: {
    margin: 10,
    width: "90%",
  },
  description: {
    textAlign: "center",
    margin: 10,
    fontSize: 16,
    height: 100,
    width: 250,
    borderRadius: 10,
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
