import { useState } from 'react';

const CreateTodo = ({ settodos, todos }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('INPROGRESS');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      status
    };

    fetch('http://127.0.0.1:8000/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        settodos([...todos, data]);
        setTitle('');
        setStatus('INPROGRESS');
      });
  };

  return (
    <div className="container mt-4">
      <form className="row w-100" onSubmit={handleSubmit}>
        <div className="col-7 mb-3">
          <label htmlFor="todo" className="form-label">New Todo</label>
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-tasks"></i></span>
            <input 
              type="text" 
              className="form-control" 
              id="todo" 
              placeholder="Enter todo" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="col-3 mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-flag"></i></span>
            <select 
              id="status" 
              className="form-control" 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
            >
              <option value="DONE">DONE</option>
              <option value="INPROGRESS">INPROGRESS</option>
            </select>
          </div>
        </div>

        <div className="col-2 mb-3 align-self-end">
          <button type="submit" className="btn btn-success w-100">
            <i className="fas fa-plus"></i> Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
