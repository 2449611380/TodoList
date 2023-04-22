import React from "react";
import "./addTodos.css"

export class AddTodos extends React.Component{
//   constructor(){
    // super();
//   }
  render(){
    return (
        <div className="input_block">
            <div className="INPUT">
                <input name="content" placeholder="输入你的待办事项" type="text" />
                <input name="dateTime" type="datetime-local" />
                <button>添加事项</button>
            </div>

            <div className="grouping">
                选择分组：
                <select name="grouping">
                    <option value="默认分组">默认分组</option>
                </select>
            </div>
      </div>
    )
  }
}