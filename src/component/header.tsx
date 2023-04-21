import React from 'react'
import {GrSearch} from 'react-icons/Gr'


export default function header() {
  
  return (
    <div className='bg-[#282828] flex justify-between items-center w-full  h-fit p-4 shadow-lg text-[#eff1f6bf] '>
<p className='capitalize text-2xl'>aneesh meena <span className='text-lg lowercase'>anishmeena001@gmail.com</span> </p>

<div className='flex gap-2 '>
<select
              className="border-2 text-[#282828] font-bold px-8 md:px-12  py-2"
              
             
            >
              
                    <option >
                     hello
                    </option>
                    <option >
                     hello
                    </option>
                
            </select>
       <div className='flex   '>
            <input type='search' className='border-2  outline-none p-2' />
          <i className='position absolute  flex right-5 top-6  text-2xl'><GrSearch/></i>
            </div>

            </div>

    </div>
  )
}
