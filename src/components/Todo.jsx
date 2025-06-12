import React, { useEffect, useRef, useState } from 'react';
import "./styles.css";
import add_icon  from "../assets/add_icon.png"
import TodoItems from './TodoItems';
const Todo = () => {

  const[todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef(); // Input fields to type task and add to the function
  const  add = ()=>{
    const inputText = inputRef.current.value.trim();
  
    if(inputText === ""){
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id)=>{
    setTodoList((prevTodo)=>{
      return prevTodo.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id)=> {
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id == id){
          return {...todo, isComplete: !todo.isComplete}
        }  return todo;
      })
    })
  }
useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todoList));
},[todoList])

  return (
    <div className='container'>
      {/* -----Title----- */}
     <div className='items1'>
      <img  className='icons' src={add_icon} alt=''/>
      <h1 className='title'>My Todo</h1>
     </div>

     {/* -----Input Box----- */}
     <div className='items2'>
      <input ref={inputRef} className='inputs' type='text' placeholder='Add Your Task'/>
      <button onClick={add} className='btn'>ADD +</button>
     </div>

      {/* -----Todo Items----- */}
      <div> 

        {todoList.map((item,index)=>{
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} 
           deleteTodo={deleteTodo} toggle={toggle}/>
        })}

      </div>
    </div>
  )
}

export default Todo
