import React from "react";
import TodoForm from "./TodoForm";

export const ToDoList = (props) => {
    const { list, updateList } = props;

    const deleteTodo = (toDoId) => {
        const newList = {
            ...list,
            toDos: list.toDos.filter((x) => x.id !== toDoId)
        };
        updateList(newList);
    }
    
    const addToDo = (toDo) => updateList({...list, toDos: [...list.toDos, toDo]})

    const toDos = () => (
        <ul className="list-group">
            {list.toDos.map((toDo, index) => (
                <li className="list-group-item" key={index}>
                    <label> <b>To Do:</b> {toDo.name} <b>Due Date:</b> {toDo.date}</label>
                    <br></br>
                    <button className="btn btn-danger d-flex align-items-end" onClick={(e) => deleteTodo(toDo.id)}>Finished</button>
                </li>
            ))}
        </ul>   
    );

    return(
        <div className="row">
            <div className="col">
                <h2>{list.name}</h2>
                {
                    toDos({ toDos, listId: list.id, deleteTodo})
                }
            </div>
            <div className="col">
                <TodoForm addToDo={addToDo} />
            </div>
        
            
        </div>
    );
};

export default ToDoList