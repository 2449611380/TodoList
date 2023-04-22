import React from "react";
import axios from "axios";
import { Animation } from "./Component/Animation/Animation";
import { AddTodos } from "./Component/addTodos/addTodos";
import { Tabulation } from "./Component/Tabulation/Tabulation";
import "./App.css";

export class App extends React.Component{
  constructor(){
    super();
    this.Groupings = [];
    this.newGroupings = [];

    // 默认获取全部数据 
    axios.get('http://localhost/api/all')
    .then(res => {
      if(res.data.length === 0) return;
      
      this.setState({
        data: res.data
      })
    })

    axios.get('http://localhost/api/all').then(res=>{
        this.Groupings = res.data;
    }).finally(() => {
        this.Groupings.map(item => {
            return this.newGroupings.push(item.grouping);
        })

        this.setState({
          newGroupings: this.newGroupings
        })
    });
  }
  state = {
    data: [{content: "暂无数据..."}],
    newGroupings: [],
  }
  render(){
    return (
      <div className="App">
        <Animation />
        <img src="./logo.png" className="Logo" alt="logo" />

        <div className="center">
          <AddTodos newGroupings={this.newGroupings} AddTodos={this.AddTodos} data={this.state.data} />
          <Tabulation ClassificationData={this.ClassificationData} newGroupings={this.newGroupings} data={this.state.data} DelTodos={this.DelTodos} />
        </div>
      </div>
    )
  }
  AddTodos = (content, dateTime, grouping, complete) =>{
    if(content === undefined && dateTime === undefined && grouping === undefined && complete === undefined) return;
    const todos = [...this.state.data, {content: content, date:dateTime, grouping: grouping, complete: 1}];
    
    this.setState({
      data: todos
    })
    
    axios.post("http://localhost/api/add", {
      content:content,
      date:dateTime,
      grouping:grouping,
      complete:complete
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
  ClassificationData = (name) => {
    switch(name){
      case "今日":
        const date = new Date();
        const _Date_ = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        axios.put('http://localhost/api/currentDate', {
          date: _Date_
        })
        .then(res => {
          this.setState({
            data: res.data
          })
        })
        break;

      case "所有":
        axios.get('http://localhost/api/all')
        .then(res => {
          this.setState({
            data: res.data
          })
        })
        break;

      case "已完成":
        axios.get('http://localhost/api/completed')
        .then(res => {
          this.setState({
            data: res.data
          })
        })
        break;

      case "分组管理":
        console.log(this.state.newGroupings);
        break;

      default:
        console.log('default');
        break;
    }
  }
}