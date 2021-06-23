import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {deletedTodo} from '../../redux/reducers/counter';
import './Comments.css'
const Comm = ({todoObj}) => {
    const dispatch=useDispatch()
    const todo=useSelector(s => s.counter.todos)
    const deleteHandler = () =>{
        dispatch(deletedTodo(todo.filter((el)=> el.id !==todoObj.id)))
}
           
    
  
    return (
         <div className='com_section'>     

   <li  className='comment_list' key={todo.id}>
       <div><div className='com_user'>User: <strong>{todoObj.userName}</strong></div>
      <div className='com_mes'> Comment: <strong>{todoObj.todoName}</strong></div></div>
      <button onClick={deleteHandler} className='btn-outline-danger btn-delete'>Delete</button>
       </li>
</div>
    );
};

export default Comm;