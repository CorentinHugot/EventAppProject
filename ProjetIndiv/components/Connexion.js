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
  Input,
} from "react-native";
import navigation from "react-navigation";
import { BorderlessButton } from "react-native-gesture-handler";
import firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import * as Constants from "expo-constants";

// instanciation de firebase et initialisation de la BDD en ligne
const firebaseConfig = {
  apiKey: "AIzaSyASIl4z25jSFdccwybL4ptG1rPUVRCIId0",
  authDomain: "projetindivensc.firebaseapp.com",
  databaseURL: "https://projetindivensc.firebaseio.com",
  projectId: "projetindivensc",
  storageBucket: "projetindivensc.appspot.com",
  messagingSenderId: "1026864132271",
  appId: "1:1026864132271:web:8121be6425726ed153a45a",
  measurementId: "G-L6LB131YPD",
};

//initialisation de la bdd avec condition si initialisation deja effectuée
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: "",
    };
  }

  // fonction de notification bien codée qui malheureusement rencontre une confrontation avec ma version d'expo

  // registerForPushNotificationsAsync = async () => {
  //   const { status: existingStatus } = await Permissions.getAsync(
  //     Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;

  //   // only ask if permissions have not already been determined, because
  //   // iOS won't necessarily prompt the user a second time.
  //   if (existingStatus !== "granted") {
  //     // Android remote notification permissions are granted during the app
  //     // install, so this will only ask on iOS
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }

  //   // Stop here if the user did not grant permissions
  //   if (finalStatus !== "granted") {
  //     return;
  //   }

  //   try {
  //     // Get the token that uniquely identifies this device
  //     let token = await Notifications.getExpoPushTokenAsync();
  //     console.log(token);

  //     // POST the token to your backend server from where you can retrieve it to send push notifications.
  //     firebase
  //       .database()
  //       .ref("users/" + this.currentUser.uid + "/push_token")
  //       .set(token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // async componentDidMount() {
  //   this.currentUser = await firebase.auth().currentUser;
  //   await this.registerForPushNotificationsAsync();
  // }

  //fonction d'inscription d'un utilisateur
  signup = () => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          alert(error.message);
        });
      alert("Inscription réussie ! Connectes toi maintenant.");
    } catch (err) {
      alert(err);
    }
  };

  //fonction de connexion d'un utilisateur
  signin = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() =>
          this.props.navigation.navigate("Accueil", { mail: this.state.email })
        )
        .catch((error) => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.inputImage}
          source={{
            uri: "https://img.icons8.com/cute-clipart/64/000000/calendar",
          }}
        />
        <Text style={styles.titreApp}> MyEvent</Text>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/bubbles/50/000000/standing-man.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/cute-clipart/64/000000/cancel-4-digits.png",
            }}
          />
          <TextInput
            placeholder="Mot de Passe (6 char min)"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View>
          <View style={styles.but}>
            <Button
              title="Connection"
              color="#008B8B"
              onPress={() => this.signin()}
            />
          </View>
          <View style={styles.but}>
            <Button
              style={styles.but}
              title="Inscription"
              color="#008B8B"
              onPress={() => this.signup()}
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
    margin: "auto",
    alignItems: "center",
    backgroundColor: "#E8F6F3",
    justifyContent: "center",
  },
  inputImage: {
    width: 150,
    height: 120,
  },
  but: {
    margin: 10,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  titreApp: {
    margin: 10,
    fontSize: 70,
    color: "#008B8B",
  },
  mdpinscrit: {
    flexDirection: "row",
  },
  gras: {
    fontWeight: "bold",
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
});
