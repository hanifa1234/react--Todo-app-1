import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'




const Home = () => {

  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
    console.log(todos);
  };

  const handelRemoveTodo=(id)=>{
  //  const filderTodos = todos.filter((todo) => todo.id !== id);
   setTodos((prevTodos=>{
    const filderTodos = prevTodos.filter((todo)=> todo.id !== id );
    return filderTodos;
   }))
  }

  return (
    <div className={style.container} >
      <h1 style={{ color: "white" }}>Todo App</h1>

      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos}  onRemoveTodo={handelRemoveTodo} />

    </div>
  )
}

export default Home