import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Input
} from "react-native";
import navigation from "react-navigation";
import { BorderlessButton } from "react-native-gesture-handler";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASIl4z25jSFdccwybL4ptG1rPUVRCIId0",
  authDomain: "projetindivensc.firebaseapp.com",
  databaseURL: "https://projetindivensc.firebaseio.com",
  projectId: "projetindivensc",
  storageBucket: "projetindivensc.appspot.com",
  messagingSenderId: "1026864132271",
  appId: "1:1026864132271:web:8121be6425726ed153a45a",
  measurementId: "G-L6LB131YPD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  signup = () => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          alert("Inscription Success");
        });
    } catch (err) {
      alert(err);
    }
  };

  signin = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() =>
          this.props.navigation.navigate("Accueil", { mail: this.state.email })
        )
        .catch(error => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.inputImage}
          source={{
            uri: "https://img.icons8.com/cute-clipart/64/000000/calendar"
          }}
        />
        <Text style={styles.titreApp}> MyEvent</Text>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/bubbles/50/000000/standing-man.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/cute-clipart/64/000000/cancel-4-digits.png"
            }}
          />
          <TextInput
            placeholder="Mot de Passe (6 char min)"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View style={styles.container_row}>
          <Button
            style={styles.marge}
            title="Se connecter"
            onPress={() => this.signin()}
          />
          <Button
            style={styles.marge}
            title="S'inscrire"
            onPress={() => this.signup()}
          />
        </View>

        <TouchableOpacity
          style={[styles.button1Container, styles.loginButton]}
          onPress={() => {
            this.props.navigation.navigate("Accueil");
          }}
        >
          <Text style={styles.loginText}>Se connecter en temps qu'invité</Text>
        </TouchableOpacity>
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
  titreApp: {
    margin: 30,
    marginTop: -30,
    fontSize: 70
  },
  mdpinscrit: {
    flexDirection: "row"
  },
  gras: {
    fontWeight: "bold"
  },
  inputImage: {
    borderBottomWidth: 1,
    width: 100,
    height: 100,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
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
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 150,
    borderRadius: 10
  },
  button1Container: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 1000,
    borderRadius: 10
  },
  loginButton: {
    backgroundColor: "grey"
  },
  loginText: {
    color: "white"
  }
});
