const CreateTodo = () => {
    return (
        <div className="container mt-4">
            <form className="row w-100">
                 
                <div className="col-8 mb-3">
                    <label htmlFor="todo" className="form-label">New Todo</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-tasks"></i></span>
                        <input type="text" className="form-control" id="todo" placeholder="Enter todo" />
                    </div>
                </div>

                <div className="col-2 mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-flag"></i></span>
                        <select id="status" className="form-control">
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
