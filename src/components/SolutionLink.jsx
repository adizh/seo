import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'
const SolutionLink = () => {
    return (
        <div>
        <div  className='sol_link'>
           <div>
               <img  className='sol_pic' src='https://awebstar.com.sg/wp-content/uploads/2020/02/On-Demand-Service-Apps-for-Business.png'/>

           </div>
           <div className='sol_text'>
               We'll be glad to help  you anytime
           </div>
         

        </div>
        <Link className='sol_back' to='/'>
               <img src={icon} alt="" className='left_btn' />
               Back to main page</Link>
        </div>
    );
};

export default SolutionLink;