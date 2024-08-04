import { useState } from 'react'


const Todos = () => {

    const [todos, setTodos] = useState([
        {title : 'todo1' , status: 'done', description:'descriptons for todo1'},
        {title : 'todo2' , status: 'done', description:'descriptons for todo2'},
        {title : 'todo3' , status: 'inprogress', description:'descriptons for todo3'},
        {title : 'todo4' , status: 'done', description:'descriptons for todo4'},
   

    ])


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
