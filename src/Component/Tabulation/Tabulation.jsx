import React from "react";
// import axios from "axios";
import "./Tabulation.css";

export class Tabulation extends React.Component{
    constructor(props){
        super(props);
        console.log('this is Tabulation');
    }
    state = {
        tabulation: "所有",
        Groupings: this.props.newGroupings,
    }
    render(){
        return(
            <div className="Tabulation">
                <ul className="table">
                    <li onClick={() => this.handleClick('今日')} name="toDay">今日</li>
                    <li onClick={() => this.handleClick('所有')} name="all">所有</li>
                    <li onClick={() => this.handleClick('已完成')} name="completed">已完成</li>
                    <li onClick={() => this.handleClick('分组管理')} name="groupManagement">分组管理</li>
                    <li>
                        当前列表/{this.state.tabulation} 筛选：
                        <select>
                            {
                                [...new Set(this.state.Groupings)].map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </li>
                </ul>

                <ul className="todolist">
                    {
                        this.props.data.map((item,index) => {
                            if(item.content === "暂无数据...") return <h2 key={index}>暂无数据...</h2>;
                            return <li style={{textDecoration:item.complete === 0 ? 'line-through' : ''}} key={index}>
                                {item.content} | {item.date} | {item.grouping}
                                <div className="list_control">
                                    <button style={{display: item.complete === 0 ? "none" : ""}} >完成</button>
                                    <button style={{display: item.complete === 1 ? "none" : ""}} >取消</button>
                                    <button>编辑</button>
                                    <button onClick={() => this.DelTodos(index, item.id)}>删除</button>
                                </div>

                                <div className="list_edit">
                                    <h1>待办编辑</h1>
                                    更改事项：<input placeholder="待办" type="text" />
                                    <br />
                                    更改时间：
                                    <input type="datetime-local" />
                                    <br />
                                    <button onClick={()=>{console.log('123')}}>确认修改</button>
                                    <button onClick={()=>{console.log('321')}}>取消</button>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleClick = (name, e) => {
        this.setState({
            tabulation: name,
        });
        this.props.ClassificationData(name);
    }
    DelTodos = (index, id) => {
        this.props.DelTodos(index, id)
    }
}
