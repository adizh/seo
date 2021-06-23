import React from 'react';
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'
const Optimization = () => {
    return (
        <div>
        <div className='research'>
        <h1>Seo Optimization</h1>
            <div className='pic_block'>
               
                <img className='res_pic'
                src='
                https://blog.alexa.com/wp-content/uploads/2016/09/on-page-optimization-in-seo-fb.jpg' alt="" />
            </div>
            <div className="res_text">
            Relevant and popular to the customers: you can monitor monthly search volume to select the appropriate keywords for your B2B website.
<div className='stage_text'>Related to your brand/product/service: some keywords might be favorite to the customers but not to your brand or products. Ensure that the picked keywords can match both the customer's taste and your offerings.
</div>
            </div>


<div className="res_content">

<h2>SEO Keyword Research & Keyword Targeting Best Practices</h2>
<div className="res_stage second">


The first step in search engine optimization is to determine what you’re actually optimizing for. This means identifying terms people are searching for, also known as “keywords,” that you want your website to rank for in search engines like Google.
<div className='stage_p'>
For example, you may want your widget company to show up when people look for “widgets,” and maybe when they type in things like “buy widgets.” The figure below shows search volume, or the estimated number of searches for a specific term, over a period of time:

</div>
<div className="stage_pic">
<img src="https://images.squarespace-cdn.com/content/v1/55303981e4b0478bc891980f/1586619870652-B5KED76YN11XQYXPIEU5/ke17ZwdGBToddI8pDm48kFvwG5G3HNagTMGhhPWg0BF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0geeCvn1f36QDdcifB7yxGgJxEYSwpocB0s_-mjnGhDTx9z63Xoiw3pU5z1j2duRSg/32010.jpg" alt="" />
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

export default Optimization;