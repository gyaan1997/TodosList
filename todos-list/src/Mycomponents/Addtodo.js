import React, { useState } from 'react';


export const Addtodo = ({ addtodo }) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title/desc cant be empty");
    }
    else {
      addtodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  
  return <div className="container my-3">
    <h3>Add a Todo</h3>
    <form onSubmit={submit} >
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">Todo Title</label>
        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo Description</label>
        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
      </div>

      <button type="submit" className="btn btn-success">AddTodo</button>
    </form>


  </div>;

};