import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import './App.css';

import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then(res => res.json())
      .then(data => settodos(data));
  }, []); // Ensure to add an empty dependency array to run the effect only once

  const onUpdateTodo = (updatedToDo) => {
    settodos(todos.map(todo => todo.id === updatedToDo.id ? updatedToDo : todo));
  }

  const onDeleteTodo = (id) => {
    settodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 mx-auto my-5'>
          <CreateTodo settodos={settodos} todos={todos}/>
          <Todos todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
