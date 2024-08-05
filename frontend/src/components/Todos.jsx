import React from 'react';

const Todos = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  const handleToDoUpdate = (todo) => {
    const updatestatus = todo.status === "DONE" ? "INPROGRESS" : "DONE";
    fetch(`http://127.0.0.1:8000/api/${todo.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: todo.title,
        status: updatestatus
      })
    })
      .then(response => response.json())
      .then(data => {
        onUpdateTodo(data);
      });
  };

  const handleToDoDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/${id}/`, {
      method: 'DELETE'
    })
      .then(() => {
        onDeleteTodo(id);
      });
  };

  return (
    <div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <div>
              <span>{todo.title}</span>
              <small className="text-muted d-block">Created at: {new Date(todo.created_at).toLocaleString()}</small>
            </div>
            <div>
              <button 
                className={`btn btn-sm border ${todo.status === "DONE" ? "btn-success" : "btn-warning"}`}
                onClick={() => handleToDoUpdate(todo)}
              >
                {todo.status}
              </button>
              <button 
                className="btn btn-sm btn-danger ms-2"
                onClick={() => handleToDoDelete(todo.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
