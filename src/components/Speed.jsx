import React,{useState}  from 'react';
import axios from 'axios';
import backImg from '../image/illustration (3).png'
import Plan from './Plan/Plan';
import Error from './Error'
import SpeedInfo from './SpeedInfo';


const Speed = ()=>{
    const [speedData,setSpeedData]=useState({})
    const [url,setUrl]=useState('')
    const [load,setLoad]=useState(false)
    const SpeedSubmit=(e)=> {
    e.preventDefault()
    setLoad(true)
    axios(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`).then(({data}) => {
        console.log(data)    
        return setSpeedData(data);
        }).catch(() => {
            setSpeedData({...speedData,error:true})
        })
};
  const inputHandler = (e) => {
    console.log(e.target.value);
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
 {(Object.entries(speedData).length === 0) ? '' : speedData.error ? <Error/> :
                <SpeedInfo speedData={speedData} />}
</div>
<div className='speed_img'> 
    <img src={backImg}/>
</div>
</div>
<Plan/>
  </div>
    )
}
export default Speed
