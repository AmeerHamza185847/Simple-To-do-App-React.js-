import React, { useState } from 'react';
import './todo.css';


export const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todoArray, setTodoArray] = useState([]);

    let todoHandler = (e) => {
        e.preventDefault();
        if(newTodo === "") {
            alert("write your task");
        }
        else {
            setTodoArray((prevTodos) => {
                return [...prevTodos, newTodo];
            })
            setNewTodo("");
        }

    }

    let delTaskHandler = (id) => {
        // remove using filter in react , avoid pop and other simple methods
        // method 1
        // let baqiTodos = todoArray.filter((todo , index)=> id !== index);
        // setTodoArray(baqiTodos);
        // method 2
        setTodoArray(todoArray.filter((delItem, index) => {
            return id !== index;
        }));

    }

    return (
        <div>
            <form className='mainForm' onSubmit={todoHandler} >
                <p>
                    <input
                        value={newTodo}
                        type="text"
                        placeholder='Write Project name here'
                        required
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                </p>
                <p>
                    <input type="submit" value="Add +" />
                </p>
            </form>
            <br />

            <div className='list'>
                {
                    todoArray.map((item, itemIndx) => (
                        <div className='item' key={itemIndx}>
                            {item}
                            <button className='delete' onClick={() => { delTaskHandler(itemIndx) }}>Remove</button>
                            <button className='edit'>Edit</button>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}