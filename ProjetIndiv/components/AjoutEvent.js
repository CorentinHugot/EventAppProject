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

export default class AjoutEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titreEvent: "No name",
      dateEvent: "No date",
      lieuEvent: "?",
      agents: "0",
      navettes: "0",
      description: "...",
      id: 0,
      evenement: "",
      people: "",
      login: "",
    };
  }

  // recupération du nombre d'evenement déja créés pour stocker le prochain event a créer au bon id
  UNSAFE_componentWillMount = () => {
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ id: snapshot.numChildren() });
      // this.setState({ id: this.state.evenement.length + 1 }); c'est de la merde ce truc le num children fait ca oklm
    });
  };

  //fonction de creation d'evenement
  _createEvent = () => {
    try {
      firebase
        .database()
        .ref("events/" + this.state.id)
        .set({
          titre: this.state.titreEvent,
          date: this.state.dateEvent,
          lieu: this.state.lieuEvent,
          nbagents: this.state.agents,
          nbnavettes: this.state.navettes,
          description: this.state.description,
          people: this.state.people,
          login: firebase.auth().currentUser.email,
        })
        .catch((error) => {
          alert(error.message);
        });
      alert("Event créé !");
      this.props.navigation.navigate("Accueil");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    console.log(this.state.id);
    return (
      <View style={styles.main_container}>
        <View style={styles.row_container}>
          <Text style={styles.t2}> Création d'un Evenement </Text>
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
          <Text style={styles.t1}> Combien de personnes ? </Text>
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
        <View style={{ margin: 15 }}>
          <View style={styles.but}>
            <Button
              title="Créer mon event"
              color="#008B8B"
              onPress={() => {
                this._createEvent();
              }}
            />
          </View>
          <View style={styles.but}>
            <Button
              style={styles.but}
              title="Utiliser le simulateur"
              color="#008B8B"
              onPress={() => {
                this.props.navigation.navigate("Simulator");
              }}
            />
          </View>
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
  row_container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  buton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "blue",
    margin: 30,
  },

  but: {
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  t2: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#008B8B",
  },
  t1: {
    textAlign: "center",
    margin: 2,
    fontSize: 16,
  },
  description: {
    textAlign: "center",
    margin: 10,
    fontSize: 16,
    height: 100,
    width: 250,
    borderRadius: 10,
  },
});
