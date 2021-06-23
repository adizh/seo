import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {updateTodos} from '../../redux/reducers/counter';
import CommentList from './CommentList'
import Header from './Header'
import Footer from './Footer'
const Comments = () => {
    const dispatch=useDispatch();
    const todo=useSelector(s=>s.counter.todos)
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(updateTodos(e.target.children[0].value,e.target.children[1].value));
        e.target.children[0].value ='';
        e.target.children[1].value ='';
        console.log(        e.target.children[0].value ='')
        console.log(       e.target.children[1].value ='')
        console.log(e)
    };
    return (
     <div>
         <Header/>
            <div className='addTodo'>
            <form onSubmit={submitHandler} className='todo-form'>
                <input required type='text' placeholder='Your name' />
                <input required type="text" placeholder='Your comment'/>
                <button className='btn btn-outline-success'>Add a Comment</button>
            </form>
        </div>
        <CommentList num={todo.length}/>
        <Footer/>
     </div>
    );
};

export default Comments;