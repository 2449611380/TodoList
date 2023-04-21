import React from "react";
import "./App.css";
import { Animation } from "./Component/Animation/Animation";

export class App extends React.Component{
  render(){
    return(
      <div className="App">
        <img src="./logo.png" alt="logo" className="Logo" />
        <Animation />
        
        <div>
          
        </div>
      </div>
    )
  }
}