import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Perfil from "./components/Perfil";
import Matches from "./components/Matches";

const App = () => {

  const [screen, setScreen] = useState("home");
  const chooseScreen = (par) => {
    setScreen(par);
  };

  const actualScreen = () => {
    switch (screen) {
      case "home":
        return <Perfil chooseScreen={chooseScreen}/>;
      case "matches":
        return <Matches chooseScreen={chooseScreen}/>;
    }
  };

  return (
    <>
      <GlobalStyle />
      {actualScreen()}
    </>
  );
};

export default App;
