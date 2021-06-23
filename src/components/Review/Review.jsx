import React from 'react';
import './Review.css';
import News  from '../News/News';
import selena from '../../image/selena.png'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel';
import first from '../../image/harris.png'


const Review = () => {
    return (
        <div>
  <div className='rev'>
  <h2 className='rev_header'>Our Clients Say</h2>
            <div className='rev_text'>Our in - house search engine experts deliver profitable Google,
Bing, Yahoo Ranking.</div>
<Carousel>
  <Carousel.Item id='car_block'>
 <div  id='info_car' className="d-block  car_info">
<div className='car_text'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
quos dolores et quas molestias excepturi sint 
cupiditate non provident.</div>
 <img className='car_img' src={first}
      alt="First slide"
    />
    <div className='car_name'>
    Rabith Halson
    </div>
    <div className='car_job'>
    Web Design
    </div>
    </div>
  </Carousel.Item>
 <Carousel.Item>
 <div  id='info_car' className="d-block car_info">
<div className='car_text'>At vero eos
 et accusamus et iusto odio dignissimos
  ducimus qui blanditiis praesentium
   voluptatum deleniti atque corrupti
quos dolores et quas molestias excepturi sint 
cupiditate non provident.</div>
 <img className='car_img' src={selena}
      alt="First slide"
    />
    <div className='car_name'>
  Selena Roy
    </div>
    <div className='car_job'>
    UI Designer
    </div>
</div>
  </Carousel.Item>
</Carousel>
  </div>
  <News/>
        </div>
    );
};
export default Review;