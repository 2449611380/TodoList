import React from "react";
// import axios from "axios";
import "./Tabulation.css";

export class Tabulation extends React.Component{
    constructor(props){
        super(props);
        console.log('this is Tabulation');
    }
    state = {
        tabulation: "今日",
        newGrouping: []
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
                            <option value="全部分组">全部分组</option>
                            <option value="默认分组">默认分组</option>
                        </select>
                    </li>
                </ul>

                <ul className="todolist">
                    {
                        this.props.data.map((item,index) => {
                            if(item.content === "暂无数据") return <h2 key={index}>暂无数据...</h2>;
                            return <li key={index}>
                                {item.content} | {item.date} | {item.grouping}
                                <div className="list_control">
                                    <button>完成</button>
                                    <button>编辑</button>
                                    <button onClick={() => this.DelTodos(index, item.id)}>删除</button>
                                    
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
    }
    DelTodos = (index, id) => {
        this.props.DelTodos(index, id)
    }
}
