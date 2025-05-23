'use client'
import { blog_data } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const Filter = () => {

    const [active, setActive] = useState("All");

  return (
    <div className='flex flex-col border border-black w-full min-h-[100vh]  overflow-auto'>
    {/* title */}
        <div className='border border-black py-6 px-6 text-center'>
            <h1>Album Tahunan </h1>
            <p>Tahun 2021 - 2025</p>
        </div>


 {/* filter */}
 <div className='flex flex-col border border-black items-center '>
    {/* buttons */}
    <div className='flex flex-wrap gap-3  py-4 px-4 w-full justify-center'>
       <button onClick={()=> setActive('All')} className={`${active === 'All'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px] cursor-pointer`}>All</button>
       <button onClick={()=> setActive('2021')} className={`${active === '2021'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px] cursor-pointer`}>2021</button>
       <button onClick={()=> setActive('2022')} className={`${active === '2022'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px] cursor-pointer`}>2022</button>
       <button onClick={()=> setActive('2023')} className={`${active === '2023'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px] cursor-pointer`}>2023</button>
       <button onClick={()=> setActive('2024')} className={`${active === '2024'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px] cursor-pointer`}>2024</button>
       <button onClick={()=> setActive('2025')} className={`${active === '2025'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px] cursor-pointer`}>2025</button>
    </div>

    {/* images result */}
    <div className='flex flex-wrap justify-center md:justify-start  items-center border border-black py-8 px-4 md:max-w-[80%] gap-4'>
        {blog_data.filter(item=> active === 'All' || item.category === active).map((item,index)=>(
             <div key={index} className=' md:ml-[26px] '>
             <Image draggable="false" src={item.image} alt={item.title} width={250} height={250}/>
        </div> 
        ))}       
    </div>
 </div>
</div>
  )
}

export default Filter
