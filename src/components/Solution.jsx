import React from 'react'
import macbook from '../image/macbook.png'
import {Link} from 'react-router-dom'
const Solution=()=>{
    return(
        <div>

<section className='solution' id='Solution'>

<div className='section_text'>

<h1 className='solution_header'>
Perfect Solution For
Your Business
</h1>
<p className='solution_text'>

Distinctively exploit optimal alignments for intuitive bandwidth. Quickly
coordinate e-business applications through revolutionary catalysts for
chang the Seamlessly underwhelm optimal testing procedures.

</p>
<Link to='/solution' className='solution_btn'>Learn More</Link>
</div>
<div className='section_image'>
<img src={macbook}/>
</div>
</section>
        </div>
    )
}
export default Solution