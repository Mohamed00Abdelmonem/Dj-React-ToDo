import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState } from 'react'
import './App.css'


import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';




function App() {

  const [todos, settodos] = useState([
    {title : 'todo1' , status: 'done', description:'descriptons for todo1'},
    {title : 'todo2' , status: 'done', description:'descriptons for todo2'},
    {title : 'todo3' , status: 'inprogress', description:'descriptons for todo3'},
    {title : 'todo4' , status: 'done', description:'descriptons for todo4'},


])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 mx-auto my-5'>
          <CreateTodo/>
          <Todos todos={todos} settodos={settodos}/>

      </div>
      </div>
    </div>
  )
}

export default App
