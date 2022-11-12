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
        <ul>
            {list.toDos.map((toDo, index) => (
                <li key={index}>
                    <label>{`${toDo.name} Due Date: ${toDo.date}`}</label>
                    <br></br>
                    <button onClick={(e) => deleteTodo(toDo.id)}>X</button>
                </li>
            ))}
        </ul>   
    );

    return(
        <div>
            <h2>{list.name}</h2>
            {
                toDos({ toDos, listId: list.id, deleteTodo})
            }
            <TodoForm addToDo={addToDo} />
        </div>
    );
};

export default ToDoList