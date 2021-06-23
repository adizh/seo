import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'
const Quality = () => {
    return (
        
        <div>
        <div className='business'>
             <div>
                 <img className='bus_pic' src='
                
                 https://uploads-ssl.webflow.com/5ec37983b31fa1d20d9b4e04/5f2984ba26ed087b62a84fe5_VF-Blog-Cover-LeadGenerationTools.jpg'/>
             </div>

<div className="bus_text qul">
Be the best Lead Generation
</div>
        </div>
        <Link className='sol_back' to='/'>
            <img src={icon} alt="" className='left_btn' />
            Back to main page</Link>
     </div>

    );
};

export default Quality;