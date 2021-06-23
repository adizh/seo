import React from 'react';
import './Footer.css';
import Logo from '../../image/logo.png'
import GrowBe from '../../image/GrowBe.png';
import twitter from '../../image/Vector.png'
import lin from '../../image/linkedin.png'
import google from '../../image/Vector (2).png'
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap'
const Footer = () => {
    return (
        <div id='Contact'>
         <Container className='fluid'>
         <Row>
              <Col md='3' xs='6'>
              
               <div className="logo">
                   <div className="logo_pic">
                       <img src={Logo} alt=""  className='footer_logo_img'/>
                   <img src={GrowBe} alt="" />
                   </div>
                    <div className='logo_text'>
                    Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate business through revolutionary.
                    </div>
                    <div className="logo_media">
                      
                    <a href='https://www.linkedin.com/signup/cold-join'> <img src={lin}/></a>
                <a href="https://twitter.com/?lang=ru"><img src={twitter}/></a>
                        
                <a href=""> <img src={google}/></a>
                    </div>
               </div></Col>
              
<Col md='3' id='second_footer' xs='6'> <div className="company" id='second_footer'>
                   <div className="company_title">Our Company</div>
  <div className="options">
  <div className="company_option"><a href='#Home'>about us</a></div>
                   <div className="company_option"><a href='#Services'>our services</a></div>
                   <div className="company_option"><a href='#Plan'>our plan</a></div>
                   <div className="company_option"><a href='#TeamJob'>our team</a></div>
                   <div className="company_option"><a href='#Blog'>latest news</a></div>
  </div>

               </div>
</Col>




<Col md='3' xs='6'><div className="company" id='third_footer'>
                   <div className="company_title">Our Services</div>
  <div className="options">
  <div  id='second'><a href=''>Link Building</a></div>
                   <div  id='second'>
               <a href=''>Digital Marketing</a></div>
                   <div  id='second'><a href=''>SEO Optimazation</a></div>
                   <div  id='second'><a href=''>Web Development</a></div>
                   <div  id='second'><a href=''>Terms & Privacy</a></div>
  </div>
                </div>  

                </Col> 
           <Col md='3' xs='6' id='four_footer'>    
               
               <div className="contact">
               <div className="contact_title">Our Company</div>
<div className="address"><strong>Location</strong>:<Link to ='/map'> 1370 Orvilly Rot APT,
New York, USA</Link></div>
<div className="email"><strong>Email</strong>: <a href="growbeinfo@gmail.com">growbeinfo@gmail.com</a></div>
<div className="phone">
<strong>Phone</strong>:<a href='tel:+324-9332-5018'> +324-9332-5018</a>
</div>
               </div></Col>
         
         
         
         </Row>
         </Container>
           <div className="footer_right">Copyright © GrowBe 2021. All Rights Reserved.</div>

        </div>
    );
};

export default Footer;