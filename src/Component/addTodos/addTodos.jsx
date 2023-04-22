import React from "react";
import "./addTodos.css"

export class AddTodos extends React.Component{
    constructor(props){
        super(props);
        console.log('this is addTodos');
        this.props.AddTodos();
        
    }
    state = {
        content:'',
        dateTime:'',
        grouping:'默认分组',
        complete: true,
    }
    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        switch(name){
            case "content" :
                this.setState({
                    content: value
                })
            break

            case "dateTime" :
                this.setState({
                    dateTime: value
                })
            break

            case "grouping" :
                this.setState({
                    grouping: value
                })
            break

            default:
                console.log('default event');
            break
        }
    }
    addTodos = () => {
        if(this.state.content === '' || this.state.dateTime === '' || this.state.grouping === '') return alert('请输入待办事项，待办时间，和分组');
        this.props.AddTodos(this.state.content, this.state.dateTime, this.state.grouping, this.state.complete);
    }
    render(){
        return (
            <div className="input_block">
                <div className="INPUT">
                    <input name="content" onChange={this.handleChange} placeholder="输入你的待办事项" type="text" />
                    <input name="dateTime" onChange={this.handleChange} type="datetime-local" />
                    <button onClick={this.addTodos}>添加事项</button>
                </div>

                <div className="grouping">
                    选择分组：
                    <select name="grouping" onClick={this.handleChange}>
                        <option value="默认分组">默认分组</option>
                        <option value="我爱你">我爱你</option>
                    </select>
                </div>
        </div>
        )
    }
}