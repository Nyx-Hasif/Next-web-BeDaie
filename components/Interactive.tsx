import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Interactive = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] page1-bg'>

      <div className=' text-center flex flex-col gap-5 w-[80%] items-center page1-content'>
        <h1 className='sm:text-7xl text-4xl font-bold'>Interaktif Modul</h1>
        <p className='sm:text-3xl text-xl font-medium'>Suasana pembelajaran yang kondusif</p>
        <div className='border-5 border-black'><Image src={assets.interaktif} alt='ekosistem' width={850} height={850} /></div>
      </div>
      
    </div>
  )
}

export default Interactive
