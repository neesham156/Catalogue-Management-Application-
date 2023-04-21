
import React, { useEffect, useState } from 'react'


import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';

import Product from '../component/product';
import {GrSearch} from 'react-icons/Gr'
import { Dialog } from '@material-tailwind/react';
import Analyse from '@/component/analyse';
import Description from '@/component/description';
export async function getServerSideProps(context: any) {
  let prod=[];
  let category=[];
    try {
      const res = await axios.get('https://fakestoreapi.com/products/categories');
      category = res.data;
      let arr: any[]=[];
      category.map(async (item:any)=>{
       await axios.get(`https://fakestoreapi.com/products/category/${item}`).then((response)=> arr.push(response.data.length)).catch((err)=>console.log(err))
       console.log("int",arr)
      })
      const response = await axios.get('https://fakestoreapi.com/products');
     prod = response.data;
   
   
console.log("ext",arr)
     return{
      props:{
        prod:prod,
        category:category,
        arr:arr,
      }
     }
     
     
    } catch (error) {
      console.error(error);
      return{
        props:{
          products:[],
          category:[]
        }
       }
    
      
    }

}



export default  function page({prod,category,arr}:any) {
  console.log("arr",arr)
  const  data = useSelector((state) => state);
  console.log(data)

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const [open, setOpen] = useState(false);
 
const [products,setProducts]=useState(prod)
const[prodbycat,setProdbycat]=useState<any>({});
const [cat,setCat]= useState<any>("");

useEffect(() => {
  const fetchData = async () => {
    
      
         await axios.get(`https://fakestoreapi.com/products/category/${cat}`).then((response)=> setProdbycat(response.data)).catch((err)=>console.log(err))
         ;
    
     
      
   
  };
  const fetchCata = async () => {
    
      
    await axios.get(`https://fakestoreapi.com/products`).then((response)=> setProdbycat(response.data)).catch((err)=>console.log(err))
    ;


 

};
{cat.length>0? fetchData(): fetchCata()}
 

  return () => {
   
  };
}, [cat]);

  return (<>
  <div className='relative'>
   {/* header */}
   <div className='bg-[#282828] flex flex-wrap gap-4 justify-between items-center w-full  h-fit p-4 shadow-lg text-[#eff1f6bf] '>
<p className='capitalize text-2xl'>{data.name} <span className='text-lg lowercase'>{data.email}</span> </p>

<div className='flex gap-2 '>
<select
              className="border-2 text-[#282828] font-bold px-2 md:px-12  py-2"
              onChange={({ target }) =>
              setCat((target.value))
            }
             
            >
               <option value="" key="">
                      ALL
                    </option>
              
                   {category.map((item:any,index:number)=>{
                    return (
                    <>
                      <option value={item} key={index}>
                      {item}
                    </option>
                    </>)
                   })}
                
            </select>
            {/* search box */}


       {/* <div className='flex   '>
            <input type='search' className='border-2  outline-none p-2' />
          <i className='position absolute  flex right-5 top-6  text-2xl'><GrSearch/></i>
            </div> */}

            </div>

    </div>


    {/* body */}


    <div className="flex flex-wrap">
       
        
          {cat.length==0 ?
          
          
          products.map((item:any,index:any)=>{
          return(
           <div className='w-full  md:w-1/3 lg:w-1/4  p-4 mb-5"'>
            <Product item={item} key={index} />
            </div>
          )
 
          }):
           prodbycat.map((item:any)=>{
            return(
             <div className='w-full md:w-1/4  p-4 mb-5"'>
              <Product item={item}/>
              </div>
            )
   
            })
         

          
          
          
          }
          
       
        
       
    </div>
    <div className='fixed py-2 px-8 bg-[#80b500] text-[#eff1f6bf]  right-5 bottom-4 z-50 cursor-pointer' onClick={()=>setOpen(!open)}>
      ANALYSE
    </div>
   </div>

   <Dialog open={open} handler={setOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        < Analyse category={category} />
      </Dialog>
    
    </>
  )
}
