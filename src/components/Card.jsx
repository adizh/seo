import React from 'react';
import icon1 from '../image/icon (1).png';
import icon2 from '../image/icon (2).png';
import icon3 from '../image/icon (3).png';

import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Reasons from './Reasons'
const Card = () => {
    return (
            <div id='Services' className='advantages'>


<Container>

 <Row>
    <Col md='4'>
    <Link to='/business' className='advan_card'>

<div className='card_img'>
<img src={icon1} />
</div>
<div className='card_title'>
Grow Your Business
</div>

<div className='card_text'>
Leverage agile frameworks to provide a robust synopsis for high level overviews.

</div>
<a href="" className='card_link'>Learn More...</a>
</Link>
    </Col>






    <Col md='4'>
        <Link to ='/quality'className='advan_card'>

<div className='card_img'>
<img src={icon2} />
</div>
<div className='card_title'>
Get Quality leads
</div>
<div className='card_text'>

Leverage agile frameworks to provide a robust synopsis for high level overviews.
</div>
<a href="" className='card_link'>Learn More...</a>
</Link></Col>




    <Col md='4' ><Link to='/sales' className='advan_card'>

<div className='card_img'>
<img src={icon3} />
</div>
<div className='card_title'>
Drive More Sales
</div>

<div className='card_text'>
Leverage agile frameworks to provide a robust synopsis for high level overviews.
</div>
<a href="" className='card_link'>Learn More...</a>
</Link>

</Col>
  </Row>
</Container>

<Reasons/>

</div>


        
    );
};

export default Card;