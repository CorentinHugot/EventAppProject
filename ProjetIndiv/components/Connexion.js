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
const theUsers = [{ email: "Test", mdp: "Test", pseudo: "Test" }];

export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }
  _isUserValidated() {
    let i = 0;
    while (i < theUsers.length) {
      if (theUsers[i].email == this.state.email) {
        if (theUsers[i].mdp == this.state.password) {
          return true;
        }
        return false;
      }
      i++;
    }
    return false;
  }
  onClickListener = viewId => {
    let stringToPrint = viewId;
    if (viewId == "Connexion" && this.state != null && this.state.email != "") {
      //vérification de la combinaison email mot de passe
      if (this._isUserValidated())
        stringToPrint +=
          "\n avec le mail :" + this.state.email + " " + this.state.password;
      else {
        stringToPrint += "\n Identifiants de connexion erronnés";
      }
    }
    Alert.alert("Action sélectionnée", stringToPrint);
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
            placeholder="Pseudo"
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
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true} /*caractères masqués mot de passe*/
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener("Connexion")}
        >
          <Text style={styles.loginText}>Connexion</Text>
        </TouchableOpacity>
        <View style={styles.mdpinscrit}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.onClickListener("Inscription")}
          >
            <Text>S'inscrire</Text>
          </TouchableOpacity>
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
