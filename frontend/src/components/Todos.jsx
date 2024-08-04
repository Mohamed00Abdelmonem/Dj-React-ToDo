import { useState } from 'react'


const Todos = ({todos, settodos, onUpdateTodo}) => {

    const handleToDoUpdate = (todo) => {
        const updatestatus = todo.status == "DONE" ? "INPROGRESS" : "DONE"
        fetch(`http://127.0.0.1:8000/api/${todo.id}/`,{
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                title: todo.title,
                status : updatestatus
            })
        })
        .then(response =>{
            return response.json()
        })
        .then(data => {
            onUpdateTodo(data)
        })
    
    
    }




    return (
        <div>
            <ul className="list-group"> 
                {todos.map((todo, index) => (
                    
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index
                        
                    }> 
                    <span> {todo.title}</span>
                    <button 
                         className={`btn btn-sm border ${todo.status == "DONE" ? "btn-success" : "btn-warning"}`}
                         onClick={ ()=>handleToDoUpdate(todo)}>
                         {todo.status}</button>
                    </li>
                ))}
               
                
            </ul>
        </div>
    );
};

export default Todos;
