import React from 'react'
import "../styles.css";
import accept_icon from "../assets/accept_icon.png";
import circle_icon from "../assets/circle_icon.png";
import delete_icon from "../assets/delete_icon.png";

const TodoItems = ({text, id, isComplete,  deleteTodo, toggle}) => {
  return (
    <div className='items3'>
      <div onClick={()=> {toggle(id)}} className='items4'>
        <img className='icons1' src={ isComplete ? accept_icon : circle_icon} alt=''/>
        <p className={`line1 ${isComplete ? "complete" : ""}`} >{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} className='icons2' src={delete_icon} alt=''/>
    </div>
  )
}

export default TodoItems
