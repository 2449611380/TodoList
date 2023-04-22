import React from "react";
import axios from "axios";
import { Animation } from "./Component/Animation/Animation";
import "./App.css";

export class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Animation />
        <img src="./logo.png" className="Logo" alt="logo" />
      </div>
    )
  }
}