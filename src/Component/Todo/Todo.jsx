import React, { useState } from 'react';
import './todo.css';

const Todo = () => {
    const [mainInput, setMainInput] = useState("");
    const [todo, setTodo] = useState([]);


    let todoHandler = (e) => {
        e.preventDefault();
        if (mainInput === "") {
            alert("Please write some thing");
        }
        else {
            setTodo([...todo, mainInput]);
        }
    }

    return (
        <div>
            <form className='mainForm' onSubmit={todoHandler} >
                <p>
                    <input
                        // value={mainInput}
                        type="text"
                        placeholder='Write Project name here'
                        required
                        onChange={(e) => setMainInput(e.target.value.trim())}
                    />
                </p>
                <p>
                    <input type="submit" value="Add +" />
                </p>
            </form>
            <br />

            <div className='list'>
                {todo.map((item, i) => (

                    <div className='item' key={i}>{item}</div>

                    // <div className='item' key={i}>{item}</div>
                ))
                }

            </div>
        </div>
    )
}

export default Todo;