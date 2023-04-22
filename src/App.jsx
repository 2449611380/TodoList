import React from "react";
import axios from "axios";
import { Animation } from "./Component/Animation/Animation";
import { AddTodos } from "./Component/addTodos/addTodos";
import "./App.css";

export class App extends React.Component{
  constructor(){
    super();
    
    axios.get('http://localhost/api/all')
    .then(res => {
      console.log(res);
    })
  }
  state = {
    data: [{content: "暂无数据..."}]
  }
  render(){
    return (
      <div className="App">
        <Animation />
        <img src="./logo.png" className="Logo" alt="logo" />

        <div className="center">
          <AddTodos />

        </div>
      </div>
    )
  }
}