import { useState } from "react";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick() {

    let val = todos.length;
    if(val !== 0) val = todos[todos.length - 1].id + 1

    if(title === "" || description === ""){
        alert('Fields cannot be empty')
        return
    }

    const newTodos = [
      { 
        id: val,
        title: title,
        description: description,
      },
    ];
    setTodos([...todos, ...newTodos]);
    setTitle(""); setDescription("");
  }

    function deleteTodo(id){    
        const newTodos = todos.filter( (todo) => todo.id !== id )
        setTodos(newTodos)
    }

  return (
    <>
      <div className="container-outline mx-3 my-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Title  */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description  */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Add Todo  */}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleClick}
          >
            Add Todo
          </button>
        </form>
      </div>

      {/* <div className="container-outline mx-3 my-4"> */}
        {todos.length !== 0
          ? todos.map((todo) => {
              return (
                <div className="card mx-3 my-4" key = {todo.id}>
                  <div className="card-body">
                    <h5 className="card-title"> {todo.title} </h5>
                    <p className="card-text"> {todo.description} </p>
                    <button type="button" className="btn btn-outline-danger" onClick={() => deleteTodo(todo.id) } > Delete </button>
                  </div>
                </div>
              );
            })
          :  ( <h4 className="container mx-3 my-4" > No Todos to show </h4> ) }
      {/* </div> */}
    </>
  );
}
