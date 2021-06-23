import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'

const Research = () => {
    return (
        <div>
            <div className='research'>
            <h1>Keyword Research</h1>
                <div className='pic_block'>
                   
                    <img className='res_pic'
                    src='https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/seo-keyword-research-13-of-the-biggest-mistakes-you-must-avoid--5dc3fdbb84136.png' alt="" />
                </div>
                <div className="res_text">
                Relevant and popular to the customers: you can monitor monthly search volume to select the appropriate keywords for your B2B website.
<div className='stage_text'>Related to your brand/product/service: some keywords might be favorite to the customers but not to your brand or products. Ensure that the picked keywords can match both the customer's taste and your offerings.
</div>
                </div>


<div className="res_content">

<h2>Stages of keyword research</h2>
<div className="res_stage">

<ol>For the purpose of this guide, I have divided the whole process into 3 main steps:

<li>Finding the keywords</li>
<li>Analyzing the keywords</li>
<li>Using the keywords</li>
</ol>
<div className="stage_pic">
    <img src="https://mangools.com/blog/wp-content/uploads/2019/08/3-steps-of-keyword-research.png" alt="" />
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

export default Research;