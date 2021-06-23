import React from 'react';
import {useSelector} from 'react-redux'
const Header = () => {
    const todo=useSelector(s=>s.counter.todos)
    return (
        <div className='com_len'>
            {todo.length} comments
        </div>
    );
};

export default Header;