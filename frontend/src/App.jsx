import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState } from 'react'
import './App.css'


import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';




function App() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 mx-auto my-5'>
          <CreateTodo/>
          <Todos/>

      </div>
      </div>
    </div>
  )
}

export default App
