import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import navigation from "react-navigation";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.t1}> Bienvenue à toi : ... (Authentification)</Text>
        <Image
          style={styles.inputImage}
          source={{
            uri: "https://img.icons8.com/cute-clipart/64/000000/calendar"
          }}
        />
        <View style={styles.contenu}>
          <View style={styles.item}>
            <Text> Ajouter un Evenement ? </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("AjouterEvent");
              }} /*navigation={this.props.navigation}*/
            >
              <Ionicons name={"ios-add-circle"} size={60} color={"blue"} />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Text> Afficher mes events </Text>
            <TouchableOpacity
              style={styles.contenu}
              onPress={() => {
                this.props.navigation.navigate("ListeEvent");
              }} /*navigation={this.props.navigation}*/
            >
              <Ionicons name={"ios-menu"} size={60} color={"green"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  t1: {
    textAlign: "center",
    margin: 10,
    fontSize: 20
  },
  inputImage: {
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 20,
    flexDirection: "row"
  },
  contenu: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center"
  },
  item: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "grey"
  }
});
