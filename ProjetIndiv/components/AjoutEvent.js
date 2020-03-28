import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import firebase from "firebase";

export default class AjoutEvent extends React.Component {
  componentWillMount() {
    firebase
      .database()
      .ref("events/01")
      .set({
        title: "Naissance de Coco",
        date: "11/08/1997"
      })
      .then(() => {
        console.log("INSERTED");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(firebase);
    return (
      <View style={styles.container}>
        <Text>La mec on va afficher du firebase : </Text>
        <Text>... </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
