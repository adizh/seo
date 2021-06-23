import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'
const Business = () => {
    return (
        <div>
           <div className='business'>
                <div>
                    <img className='bus_pic' src='https://cedcommerce.com/blog/wp-content/uploads/2018/12/IMG_20201015_120213_225.jpg'/>
                </div>

<div className="bus_text">
    We'll give you useful advice about business
</div>
           </div>
           <Link className='sol_back' to='/'>
               <img src={icon} alt="" className='left_btn' />
               Back to main page</Link>
        </div>
    );
};

export default Business;