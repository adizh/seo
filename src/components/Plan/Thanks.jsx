import React from 'react';

const Thanks = ({submit,setSubmit,setActive}) => {
  const btn=(e)=>{
      e.preventDefault()
    setSubmit(false)
    setActive(false)
  }
    return (
        <div onClick={btn} className={submit ? 'thanks_info active_thanks':'thanks_info '}>
         <div className='thanks_text'>   Thank you for Registration!
         We'll call you soon
         </div>
        
        <button onClick={btn} className='thans_btn'>X</button>
        </div>
    );
};

export default Thanks;