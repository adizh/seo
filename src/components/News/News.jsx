import React,{useState} from "react";
import {Link} from 'react-router-dom'
import './News.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../../image/image 2.png';
import user from '../../image/person.png';
import love from '../../image/Vector (4).png';
import message from '../../image/Vector (6).png';
import Footer from '../Footer/Footer'
import {useSelector} from 'react-redux'
const News=()=> {
   const [count,setCount]=useState(0)
 const addBtn=()=>{
     count >= 0 && count <1 ? setCount(count+1):setCount(count-1)
 }
 const todo=useSelector(s=>s.counter.todos)

        return (
            <div>
                <div className='news' id="Blog">

<h2 className='news_header'> Our Latest News</h2>
<div className='news_text'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
Curae Suspendisse ante arcu, consectetur id nisl eget.</div>
<div className='container-fluid' >
    <div className="row">
        <div className="col-sm-12">
           
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <Carousel>

                <Carousel.Item className='w-100'>
                 <div id='main_block'>
                 <div>
                   <img
                        className="d-block news_img"
                        src={first}
                        alt="First slide"
                    />
                   </div>
                   <div className='new_block'>
                       <h2 className='block_header'>How to become a new digital
marketing idea?</h2>
<div className='news_tags'>
<div className='admin'><img src={user} alt="" />
<span className='person'>By Admin</span>
</div>
<div className='likes'>

<button 
onClick={addBtn}
className='love_btn'><img src={love} alt="" /></button>


<span className='person'>{count} likes</span>
</div>
<div className='comments'>
<Link to='/comments' className='love_btn'><img src={message} alt="" /></Link>
<span className='person'>  {todo.length} comments</span>

</div>
</div>
                   </div>
                 </div>
                </Carousel.Item>

                <Carousel.Item className='w-100'>
                 <div id='main_block'>
                 <div>
                   <img
                        className="d-block news_img"
                        src={first}
                        alt="First slide"
                    />
                   </div>
                   <div className='new_block'>
                       <h2 className='block_header'>How to become a new digital
marketing idea?</h2>
<div className='news_tags'>
<div className='admin'><img src={user} alt="" />
<span className='person'>By Admin</span>
</div>
<div className='likes'>

<button 
onClick={addBtn}
className='love_btn'><img src={love} alt="" /></button>


<span className='person'>{count} likes</span>
</div>
<div className='comments'>
<Link to='/comments' className='love_btn'><img src={message} alt="" /></Link>
<span className='person'> {todo.length} comments</span>

</div>
</div>
                   </div>
                 </div>
                </Carousel.Item>
                <Carousel.Item className='w-100'>
                 <div id='main_block'>
                 <div>
                   <img
                        className="d-block news_img"
                        src={first}
                        alt="First slide"
                    />
                   </div>
                   <div className='new_block'>
                       <h2 className='block_header'>How to become a new digital
marketing idea?</h2>
<div className='news_tags'>
<div className='admin'><img src={user} alt="" />
<span className='person'>By Admin</span>
</div>
<div className='likes'>

<button 
onClick={addBtn}
className='love_btn'><img src={love} alt="" /></button>


<span className='person'>{count} likes</span>
</div>
<div className='comments'>
<Link to='/comments' className='love_btn'><img src={message} alt="" /></Link>
<span className='person'> {todo.length} comments</span>

</div>
</div>
                   </div>
                 </div>
                </Carousel.Item>

            </Carousel>
        </div>
    </div>
</div>
</div>
<Footer/>
            </div>
        )
    };


export default News;