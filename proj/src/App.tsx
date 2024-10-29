import React from "react";
import Logo from "./components/Logo";
import Navegacao from "./components/Navegacao";
import Principal from "./components/Principal"; 
import styles from "./App.module.css"

const App = () => {
  return (
    <>
      <header className="topo">
        <Principal />
        <Logo />
        <Navegacao />
      </header>
    </>
  );
}

export default App;
