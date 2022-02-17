// import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { Addtodo } from "./Mycomponents/Addtodo";
import { About } from "./Mycomponents/About";
import React, { useState ,useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo) => {

    console.log("I am on Delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addtodo = (title, desc) => {
    console.log(" I am adding a todo ", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)


  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])


  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Addtodo addtodo={addtodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
      
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch>
      

      <Footer />

      </Router>
    </>
  );
}

export default App;
