import React from 'react';
import {useSelector} from "react-redux";
import Comm from './Comm';


const CommentList = ({num}) => {
  const todo = useSelector(s => s.counter.todos);
    return (
        <ul>
            {todo.map((todoObj) => (
                <Comm num={num} todoObj={todoObj} />
            ))
            }
        </ul>
    );
};
export default CommentList;