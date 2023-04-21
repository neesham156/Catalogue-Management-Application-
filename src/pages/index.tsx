import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {FaReact} from 'react-icons/Fa'
import { useDispatch, useSelector } from 'react-redux';
export default function index() {
  const dispatch = useDispatch();

  const handleNameChange = (event:any) => {
    console.log("yes",event)
    dispatch({ type: 'SET_NAME', payload: event.target.value});
  };

  const handleEmailChange = (event:any) => {
    dispatch({ type: 'SET_EMAIL', payload: event });
  };
 
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const router=useRouter();

  return (
    <div className='min-h-screen  bg-black flex justify-center items-center p-4'>
<div className='bg-[#282828] flex flex-wrap justify-center gap-4 py-4 px-8 rounded-xl  w-96'>
  <div className='w-full flex justify-center'>
<i className='transition-all duration-700  animate-spin-slow '><FaReact className='w-16 h-16 text-[#eff1f6bf]'/></i>
  </div>
<div className='w-full flex flex-col gap-3 '>
<p className='text-[#eff1f6bf] flex justify-start text-xl'>Name</p><input type='name'  placeholder='Enter Name' className='w-84 p-2 outline-none text-[#282828] ' onChange={handleNameChange}/>
</div>
<div className='w-full  flex flex-col gap-3 '>
<p className='text-[#eff1f6bf] text-xl'>Email:</p><input type='Email' placeholder='Enter Email' value={email} className='w-84 p-2 outline-none text-[#282828] ' onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className='flex justify-center w-full'>
  <button className='bg-[#80b500] py-2 px-4 hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl  shadow-white' onClick={()=>{
    
    handleEmailChange(email)
    router.push('/page2')



  }}>
    SUBMIT
  </button>

</div>

</div>


    </div>
  )
}
