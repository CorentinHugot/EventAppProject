import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import navigation from "react-navigation";
import { BorderlessButton } from "react-native-gesture-handler";

import firebase from "firebase";

const theUsers = [{ email: "Test", mdp: "Test", pseudo: "Test" }];

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { evenement: "" };
  }
  componentWillMount() {
    const ref = firebase.database().ref("evenement");
    ref.on("value", snapshot => {
      this.setState({
        evenement: snapshot.val()
      });
    });
  }
  render() {
    console.log(this.props.navigation);

    // const events = this.state.evenement.map((event, i) => (
    //   <Text key={i}>{event.titre}</Text>
    // ));

    return (
      <View style={styles.main_container}>
        <View style={styles.container}>
          <Text>
            la tu utilises les données deg !
            {this.props.navigation.state.params.item.name}
          </Text>
        </View>
        <View style={styles.container}>
          <Text>après la c'est du test firebase :</Text>
        </View>
        <View style={styles.container}>
          <Text>Events {this.state.evenement.length}</Text>
          <Text style={styles.margin}>
            {/* Titre de l'event 3 {this.state.evenement[2].titre} */}
          </Text>
          {/* {events} */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 125
  },
  margin: {
    margin: 20
  },
  container: {
    flex: 1
  }
});
