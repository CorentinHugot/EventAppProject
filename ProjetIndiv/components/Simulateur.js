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

export default class AjoutEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbpersonne: "",
      agent: "",
      navettes: ""
    };
  }

  _calculSimu() {
    this.setState({ agent: this.state.nbpersonne / 50 + 2 }); //Math.round()
    this.setState({ navettes: this.state.nbpersonne / 40 });
    this.setState({
      simu:
        "Nous te recommandons " +
        this.state.agent +
        "agents et " +
        this.state.navettes +
        "navettes (40pers/bus) pour ton event !"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titreApp}>
          Cette page t'assiste dans le choix du nombre d'agents de sécurités et
          de navettes pour ton event !
        </Text>
        <View style={styles.box}>
          <Text> Combien de personnes prévois tu à ton evenement ?</Text>
          <TextInput
            style={styles.input}
            placeholder="Nb personnes"
            underlineColorAndroid="transparent"
            onChangeText={nbpersonne => this.setState({ nbpersonne })}
          />
        </View>
        <TouchableOpacity
          style={styles.buton}
          onPress={() => {
            this._calculSimu();
          }}
        >
          <View>
            <Text>Lancer le simulateur</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text>Agents : {this.state.agent}</Text>
          <Text>Navettes : {this.state.navettes}</Text>
        </View>
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
  box: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 20,
    width: 200
  },
  titreApp: {
    margin: 20,
    fontSize: 20
  }
});
