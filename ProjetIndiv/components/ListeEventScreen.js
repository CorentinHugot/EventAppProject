import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import EventListeItem from "./EventListeItem";
import * as firebase from "firebase";

export default class ListeEventScreen extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ["Setting a timer"];
    this.state = { event: [], isLoading: false };
  }

  UNSAFE_componentWillMount = () => {
    //je viens récupérer la liste des events de la bdd
    const ref = firebase.database().ref("events");
    ref.on("value", (snapshot) => {
      this.setState({ event: snapshot.val() });
    });
  };

  // UNSAFE_componentWillMount() {
  //   const ref = firebase.database().ref("events");
  //   //Récupère toutes les parties dont le mail est celui de l'utilisateur actuellement connecté
  //   ref.on("value", (snapshot) => {
  //     //Vérifie s'il existe bien des events avec cet utilisateur ajouter && dataResult.length<snapshot.numChildren
  //     const databdd = snapshot.val();
  //     let tabPassage = [];
  //     if (databdd.lenght != 0) {
  //       for (let i = 0; i < databdd.lenght; i++) {
  //         if (databdd[i].login == currentUser.email)
  //           //on isère dans le tableau tout les
  //           tabPassage.push(databdd[i]);
  //       }
  //       this.setState({ event: tabPassage });
  //     }
  //   });
  // }

  render() {
    if (this.state.event) {
      return (
        <View style={styles.container}>
          <Text style={styles.t2}> Mes Events </Text>
          <FlatList
            style={{ marginTop: 20 }}
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
    return (
      <View style={styles.main_container}>
        <Text style={styles.t2}> Aucun evenement de créé ! </Text>
        <View style={styles.row_container}>
          <Text style={styles.t1}> En ajouter un ? </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("AjouterEvent");
            }}
          >
            <Ionicons name={"ios-add-circle"} size={60} color={"#008B8B"} />
          </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: "#E8F6F3",
  },
  row_container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  t1: {
    textAlign: "center",
    margin: 5,
    fontSize: 18,
  },
  t2: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#008B8B",
    marginTop: 10,
  },
  margin: {
    margin: 20,
  },
});
