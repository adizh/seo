import React,{useState} from 'react'
import './Plan.css'
import {Container,Row,Col} from 'react-bootstrap'
import Thanks from './Thanks'
import Modal from './Modal'
import Team from '../Team/Team'
const Plan = () => {
    const plan_btn=()=>{
        setActive(true)
    }
    const [active,setActive]=useState(false)
    const [submit,setSubmit]=useState(false)
    return(
        <div>
<div className='plans' id='Plan'>
<div className='plan_title'>Our Plans</div>
<div className='plan_text'>Choose The Right SEO for You</div>
<Container>
    <Row>
        <Col md='4'>
            <div  onClick={()=>setActive(true)}className='plan_card'>
                <div className='plan_title'>Plus</div>
                <div className='plan_price'>
                    <div className='price_icon'>$</div>
                <div className='price_def'>
                <div className='price_num'>30</div>
                    <div className='price_month'>/month</div>
                </div>
                </div>
                <div className='plan_info'>50GB Bandwidth<br/>
Business & Financ Analysing<br/>
24 Hour Support<br/>
Customer Managemet</div>
<button onClick={plan_btn} className='plan_btn' to ='/plus'>Get Started</button>
            </div>
        </Col>
        <Modal  submit={submit} setSubmit={setSubmit} active={active} setActive={setActive} />
        <Thanks active={active} setActive={setActive} submit={submit} setSubmit={setSubmit}/>
        <Col md='4'>
            <div  onClick={()=>setActive(true)}className='plan_card'>
                <div className='plan_title'>Beginner</div>
                <div className='plan_price'>
                    <div className='price_icon'>$</div>
                <div className='price_def'>
                <div className='price_num'>55</div>
                    <div className='price_month'>/month</div>
                </div>
                </div>
                <div className='plan_info'>50GB Bandwidth<br/>
Business & Financ Analysing<br/>
24 Hour Support<br/>
Customer Managemet</div>
<button className='plan_btn' onClick={plan_btn} >Get Started</button>
            </div>
        </Col>
        <Modal  submit={submit} setSubmit={setSubmit} active={active} setActive={setActive} />
        <Thanks active={active} setActive={setActive} submit={submit} setSubmit={setSubmit}/>
    
        <Col md='4'>
            <div  onClick={()=>setActive(true)}className='plan_card'>
                <div className='plan_title'>Advanced</div>
                <div className='plan_price'>
                    <div className='price_icon'>$</div>
                <div className='price_def'>
                <div className='price_num'>99</div>
                    <div className='price_month'>/month</div>
                </div>
                </div>
                <div className='plan_info'>50GB Bandwidth<br/>
Business & Financ Analysing<br/>
24 Hour Support<br/>
Customer Managemet</div>
<button className='plan_btn' onClick={plan_btn} >Get Started</button>
            </div>
        </Col>
        <Modal  submit={submit} setSubmit={setSubmit} active={active} setActive={setActive} />
        <Thanks active={active} setActive={setActive} submit={submit} setSubmit={setSubmit}/>
    
   
    </Row>
</Container>

</div>
<Team/>
        </div>
    )
}
export default Plan