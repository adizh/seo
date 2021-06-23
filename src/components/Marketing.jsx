import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'
const Marketing = () => {
    return (
        <div>
        <div className='research'>
        <h1>Social Marketing</h1>
            <div className='pic_block'>
               
                <img className='res_pic'
                src='http://go4course.com/Content/app_images/Courses/89beeffe-2083-4e17-83d9-479140cf50da.jpeg
'/>
                </div>
            <div className="res_text">
            Relevant and popular to the customers: you can monitor monthly search volume to select the appropriate keywords for your B2B website.
<div className='stage_text'>Related to your brand/product/service: some keywords might be favorite to the customers but not to your brand or products. Ensure that the picked keywords can match both the customer's taste and your offerings.
</div>
            </div>


<div className="res_content">

<h2>Components of an Effective Social Marketing Strategy</h2>
<div className="res_stage second">


The first step in search engine optimization is to determine what you’re actually optimizing for. This means identifying terms people are searching for, also known as “keywords,” that you want your website to rank for in search engines like Google.
<div className='stage_p'>
For example, you may want your widget company to show up when people look for “widgets,” and maybe when they type in things like “buy widgets.” The figure below shows search volume, or the estimated number of searches for a specific term, over a period of time:

</div>
<div className="stage_pic">
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/social-media-opportunities-601bc9d146e00.png" alt="" />
</div>
</div>




</div>

        </div>
        <Link className='sol_back' to='/'>
           <img src={icon} alt="" className='left_btn' />
           Back to main page</Link>
    </div>
    );
};

export default Marketing;