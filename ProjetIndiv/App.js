import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import ListeEventScreen from "./components/ListeEventScreen";
import AjoutEvent from "./components/AjoutEvent";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Connexion from "./components/Connexion";
import EventDetail from "./components/EventDetail";
import Simulator from "./components/Simulateur";
import ModifEvent from "./components/ModifEvent";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "black",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default class App extends React.Component {
  render() {
    return (
      /*<Home />*/
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

const EventStack = createStackNavigator(
  {
    ConnectesToi: {
      screen: Connexion,
      navigationOptions: {
        title: "Connecte Toi !",
      },
    },
    Accueil: {
      screen: Home,
      navigationOptions: {
        headerLeft: null,
        title: "Accueil",
      },
    },
    AjouterEvent: {
      screen: AjoutEvent,
      navigationOptions: {
        title: "Ajouter un Event",
      },
    },
    Simulator: {
      screen: Simulator,
      navigationOptions: {
        title: "Simulator",
      },
    },
    ListeEvent: {
      screen: ListeEventScreen,
    },
    ModifEvent: {
      screen: ModifEvent,
      navigationOptions: {
        title: "ModifEvent",
      },
    },
    DetailEvent: {
      screen: EventDetail,
      navigationOptions: {
        title: "DetailEvent",
      },
    },
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const AppContainer = createAppContainer(EventStack);
