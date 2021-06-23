import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'
const Sales = () => {
    return (
    

 
        <div>
        <div className='business'>
             <div>
                 <img className='bus_pic' src='
                
                https://www.pngitem.com/pimgs/m/248-2484287_e-commerce-solutions-online-shopping-isometric-hd-png.png'/>
             </div>

<div className="bus_text qul">Encrease your sales with Us
</div>
        </div>
        <Link className='sol_back' to='/'>
            <img src={icon} alt="" className='left_btn' />
            Back to main page</Link>
     </div>

    );
};

export default Sales;