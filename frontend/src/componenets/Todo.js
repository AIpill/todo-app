import axios from "axios";
import React from "react";


function TodoItem(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`https://test-3j9d.onrender.com/api/todo/${title}`)
        .then(res => console.log(res.data)) 
        .catch(res => console.log(res))
    }
    
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.title} : </span> {props.todo.description} 
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;
