import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import navigation from "react-navigation";
import { BorderlessButton } from "react-native-gesture-handler";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      mail: this.props.navigation.state.params.mail,
    });
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.row_container}>
          <View style={styles.image_container}></View>
          <View>
            <Text style={styles.t2}> Salut à toi ! </Text>
            <Text style={styles.t1}>{this.state.mail}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewContainer}
          onPress={() => {
            this.props.navigation.navigate("AjouterEvent");
          }}
        >
          <Text style={styles.text}>
            <Text> Ajouter un Evenement ? </Text>
          </Text>
          <Ionicons name={"ios-add-circle"} size={60} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewContainer}
          onPress={() => {
            this.props.navigation.navigate("ListeEvent");
          }}
        >
          <Text style={styles.text}>
            {" "}
            <Text> Afficher mes events </Text>
          </Text>
          <Ionicons name={"ios-menu"} size={60} color={"white"} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8F6F3",
  },
  inputImage: {
    width: 160,
    height: 160,
  },
  image_container: {
    marginTop: 20,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  row_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  titre: {
    fontSize: 40,
  },
  viewContainer: {
    height: 150,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#008B8B",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "200",
    color: "#E8F6F3",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  container2: {
    flex: 1,
    margin: 5,
    backgroundColor: "cadetblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
    fontSize: 20,
  },
  image: {
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 20,
    flexDirection: "row",
  },
  item: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "grey",
  },

  but: {
    backgroundColor: "grey",
  },

  mdpinscrit: {
    flexDirection: "row",
  },
  gras: {
    fontWeight: "bold",
  },
  inputImage: {
    borderBottomWidth: 1,
    width: 100,
    height: 100,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "white",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "white",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
});
