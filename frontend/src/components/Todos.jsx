import { useState } from 'react'


const Todos = ({todos, settodos}) => {

  
    return (
        <div>
            <ul className="list-group"> 
                {todos.map((todo, index) => (
                    
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index
                        
                    }> 
                    <span> {todo.title}</span>
                    <button className='btn btn-sm border'> {todo.status}</button>
                    </li>
                ))}
               
                
            </ul>
        </div>
    );
};

export default Todos;
