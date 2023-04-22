import React from "react";
import axios from "axios";
import { Animation } from "./Component/Animation/Animation";
import { AddTodos } from "./Component/addTodos/addTodos";
import { Tabulation } from "./Component/Tabulation/Tabulation";
import "./App.css";

export class App extends React.Component{
  constructor(){
    super();

    // 默认获取全部数据 
    axios.get('http://localhost/api/all')
    .then(res => {
      this.setState({
        data: res.data
      })
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
          <AddTodos AddTodos={this.AddTodos} data={this.state.data} />
          <Tabulation data={this.state.data} DelTodos={this.DelTodos} />
        </div>
      </div>
    )
  }
  AddTodos = (content, dateTime, grouping) =>{
    if(content === undefined && dateTime === undefined && grouping === undefined) return;
    
    const todos = [...this.state.data, {content: content, date:dateTime, grouping: grouping}];
    
    this.setState({
      data: todos
    })
    
    axios.post("http://localhost/api/add", {
      content:content,
      date:dateTime,
      grouping:grouping,
    });
  }
  DelTodos = (index, id) => {
    const todos = [...this.state.data];
    todos.splice(index, 1);

    this.setState({
      data: todos
    })

    axios.post("http://localhost/api/del", {
      id:id,
    });
  }
}