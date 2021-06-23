import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import illustration from '../image/illustration.png'
import illustration2 from '../image/illustration (1).png'
import illustration3 from '../image/illustration (2).png'
import Need from './Need'
import {Link} from 'react-router-dom'

const Reasons = () => {
    return (
       <section className='reasons'>
        <h1 className='reason_title'>
        Why You Should Choose Us.
        
        </h1>  
  <p className='reason_text'>
  
  
  Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business
applications through revolutionary catalysts.
  </p>



  <Container>

<Row>
   <Col md='4' sm='6'>
   <Link to = '/research'className='reasons_card'>

<div className='reason_img'>
<img src={illustration} />
</div>
<div className='reasons_title'>
Keyword Research
</div>

<div className='reasons_text'>
Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.
</div>
<a href="" className='reasons_link'>Learn More...</a>
</Link>
   </Col>


   <Col md='4' sm='6' id='second_reason'>
   <Link to='/optimization' className='reasons_card'>

<div className='reason_img'>
<img src={illustration2} />
</div>
<div className='reasons_title'>
Seo Optimazation
</div>

<div className='reasons_text'>
Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.
</div>
<a href="" className='reasons_link'>Learn More...</a>
</Link>
   </Col>




   <Col md='4' sm='6' id='third_reason'>
   <Link to ='/marketing' className='reasons_card'>

<div className='reason_img'>
<img src={illustration3} />
</div>
<div className='reasons_title'>
Social Marketing
</div>

<div className='reasons_text'>
Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.
</div>
<a href="" className='reasons_link'>Learn More...</a>
</Link>
</Col>
 </Row>
</Container>


<Need/>
   </section>
    );
};

export default Reasons;