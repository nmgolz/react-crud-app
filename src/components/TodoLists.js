import React from "react";
import ToDoList from './ToDoList';
import { todosApi } from "../rest/TodosApi";

export default class TodoLists extends React.Component{
    state = {
        toDoLists :  []
    };

    componentDidMount(){
        this.fetchLists();
    };

    fetchLists = async () => {
        const toDoLists = await todosApi.get();
        this.setState({ toDoLists });
    };

    updateList = async (updatedList) => {
        await todosApi.put(updatedList);
        this.fetchLists();
    };

    render(){
        return(
            <div className="todo-list">
                {this.state.toDoLists.map((toDoList) => (
                    <ToDoList 
                        list={toDoList}
                        key={toDoList.id}
                        updateList={this.updateList}
                        />
                ))}
            </div>
        )

    }
}

