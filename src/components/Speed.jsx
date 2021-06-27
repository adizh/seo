import React,{useState}  from 'react';
import axios from 'axios';
import backImg from '../image/illustration (3).png'
import Plan from './Plan/Plan';
import Error from './Error'
import SpeedInfo from './SpeedInfo';
import {Spinner} from 'react-bootstrap'

const Speed = ()=>{
    const [speedData,setSpeedData]=useState({})
    const [url,setUrl]=useState('')
    const [load,setLoad]=useState(false)
    const SpeedSubmit=(e)=> {
    e.preventDefault()
    setLoad(true)
    axios(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`)
    .then(({data}) => {    
        setSpeedData(data);
        setLoad(false)  
        }).catch(() => {
            setSpeedData({...speedData,error:true})
        })
};
  const inputHandler = (e) => {
    setUrl(e.target.value)
};
 return(
        <div>         
<div className='speed'>
<div className='speed_check'>
<div className='speed_title'>Check Your Website Speed </div>
    <div className='speed_text'>
    Distinctively exploit optimal alignments for intuitive bandwidth.
    Quickly coordinate e-business through revolutionary.
    </div>
    <form   onSubmit={SpeedSubmit} className='speed_form'>
            <input type='url' placeholder = 'WEB URL'  onChange={inputHandler}/>
            <button type='submit' className = 'speed_btn'>Submit</button>
    </form>
 { load === true ? <Spinner animation="border" variant="secondary" />:(Object.entries(speedData).length === 0) ? '' : speedData.error ? <Error/> :
                 <SpeedInfo load={load} setLoad={setLoad} speedData={speedData} />}
</div>
<div className='speed_img'> 
    <img src={backImg} alt='back'/>
</div>
</div>
<Plan/>
  </div>
    )
}
export default Speed
