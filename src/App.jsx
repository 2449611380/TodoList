import React from "react";
import "./App.css";
import { Animation } from "./Component/Animation/Animation";
import { InputBlock } from "./Component/InputBlock/InputBlock";
import { Tabulation } from "./Component/Tabulation/Tabulation";

export class App extends React.Component{
  render(){
    return(
      <div className="App">
        <img src="./logo.png" alt="logo" className="Logo" />
        <Animation />
        
        <div className="center">
          <InputBlock />
          <Tabulation />
        </div>
      </div>
    )
  }
}