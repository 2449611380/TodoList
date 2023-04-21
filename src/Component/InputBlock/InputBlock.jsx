import React from "react";
import axios from "axios";
import "./InputBlock.css"

export class InputBlock extends React.Component{
  state = {
    content:'',
    dateTime:'',
    grouping:'默认分组',
  }
  handleChange = (e) => {
    const target = e.target; 
    const name = target.name; 
    const value = target.value;

    switch(name){
      case "content":
        this.setState({
          content:value
        })
      break;

      case "dateTime":
      this.setState({
        dateTime:value
      })
      break;

      case "grouping":
      this.setState({
        grouping:value
      })
      break;

      default:
        // 防警告
      break;
    }
  }
  handleClick = () => {
    if(this.state.content === '' || this.state.dateTime === '' || this.state.grouping === ''){
      return alert("请输入事项和时间");
    }
    axios.post('http://localhost/api/add', {
      content:this.state.content,
      date:this.state.dateTime,
      grouping:this.state.grouping,
    })
  }
  render(){
    return(
      <div className="input_block">
        <div className="INPUT">
            <input name="content" onChange={this.handleChange} placeholder="输入你的待办事项" type="text" />
            <input name="dateTime" onChange={this.handleChange} type="datetime-local" />
            <button onClick={this.handleClick}>添加事项</button>
        </div>

        <div className="grouping" onClick={this.handleChange}>
            选择分组：
            <select name="grouping">
                <option value="默认分组">默认分组</option>
            </select>
        </div>

      </div>
    )
  }
}
