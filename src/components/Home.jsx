import React   from 'react';
import Logo from '../image/logo.png'
import GrowBe from '../image/GrowBe.png'
import Elem from '../image/pngfind.png'
import element from '../image/element.png'
import icon from '../image/icon.png'
import Solution from './Solution'
import Card from './Card'
import PicPartners from './PicPartners'
import {Link} from 'react-router-dom';
import Navbar from './Nav/Navbar';
import ScrollTopArrow from './ScrollTopArrow';
const Home = () => {

    return (
        <div id='Home'>
          <ScrollTopArrow/>
    <div className="nav">
               <div className='nav_logo'>
                   <img src =
             {Logo} className='growBe'/>
                   <img src={GrowBe} className='grow_word'/>  
                </div>        
<Navbar/>
            </div>
            <div className='main_home'>

              <div className='seo'
              
              style={{ backgroundImage: `url(${element})`,
              backgroundRepeat: 'no-repeat',
              width:'550px' 
            }}
              >
                <h1 className="seo_header"> SEO & Digital
Marketing For Your
Website.</h1>
<p className='seo_subtext'>
Provide all kind of seo services and help to improve
seo ranking. Globally incubate standards.
</p>
<div className="seo_links">
<div><button className='seo_btn'>Start Now</button>
</div>  
<div className='seo_video'>
  <div>
  <Link to='/video' href="">
  <img src={icon} />
  </Link>
  </div>
  
<div>  <Link to='/video' href="" className='seo_link'>Watch Video</Link>
</div>  
</div>

</div>
              </div>
              <div className='pic'>
                <img src={Elem} className='left_pic'/>
              </div>

            </div>
        
          <PicPartners/>
<Solution/>
<Card/>

        </div>
    );
};

export default Home;