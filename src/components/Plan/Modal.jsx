import React,{useState} from 'react'


const Modal=({active,setActive,submit,setSubmit})=>{
  const subBtn=(e)=>{
     e.preventDefault()
     setSubmit(true)
  }
    return(
       <div className={active ? 'modal_info active':'modal_info' } onClick={()=>setActive(false)}>
<div className='modal_content' onClick={e=>e.stopPropagation()}>
<h3 className='form_header'>register now</h3>
   <form onSubmit={subBtn}>
<input placeholder='Email' className='email' type='email' required />
<input pattern="2-[0-9]{3}-[0-9]{3}" placeholder='Contact Number' type='number' className='number' required />
<button type='submit' className='form_btn'>Submit</button>
   </form>
  
</div>
</div>
    )
}
export default Modal