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

export default class AjoutEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbpersonne: "",
      agent: "",
      navettes: "",
    };
  }

  //fonction de simulation permettant de calculer le nombre de navettes et d'agents de sécurité en fonction du nombre de personnes attendues
  _calculSimu() {
    this.setState({
      agent:
        "Nous te recommandons " +
        (this.state.nbpersonne / 50 + 2) +
        " agents et",
    }); //Math.round()
    this.setState({ navettes: this.state.nbpersonne / 40 + " navettes." });
    this.setState({
      simu:
        "Nous te recommandons " +
        this.state.agent +
        "agents et " +
        this.state.navettes +
        "navettes (40pers/bus) pour ton event !",
    });
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.t2}> Simulateur </Text>

        <Text style={styles.t1}>Assistant d'évenement :</Text>
        <View
          style={{
            height: 2,
            width: 500,
            backgroundColor: "#008B8B",
            margin: 20,
          }}
        ></View>
        <Text style={styles.t1}> Combien de personnes prévois tu ?</Text>
        <TextInput
          style={styles.input}
          placeholder="Nb personnes"
          underlineColorAndroid="transparent"
          onChangeText={(nbpersonne) => this.setState({ nbpersonne })}
        />
        <TouchableOpacity
          style={styles.buton}
          onPress={() => {
            this._calculSimu();
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Lancer le simulateur</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 2,
            width: 500,
            backgroundColor: "#008B8B",
            margin: 20,
          }}
        ></View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.t1}>{this.state.agent}</Text>
          <Text style={styles.t1}>{this.state.navettes}</Text>
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
  input: {
    margin: 10,
  },
  buton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "#008B8B",
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
    marginBottom: 20,
  },
  t1: {
    textAlign: "center",
    margin: 2,
    fontSize: 16,
  },
});
