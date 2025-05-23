import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'



const Pengajian = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] page1-bg pt-28 sm:pt-32'>
      <div className='flex flex-col gap-5 page1-content'>
        <h1 className='sm:text-7xl text-6xl font-bold text-center'>Pengajian</h1>
        <p className='sm:text-5xl text-3xl font-medium text-center'>Mod Sesi Pengajaran dan Pembelajaran</p>


        <div className='flex lg:flex-row flex-col gap-5 sm:mx-20 mx-10 mt-5' >

           <div className=' flex flex-col gap-6 justify-center sm:p-12 p-8 rounded-2xl' style={{ backgroundColor: '#38b6ff33' }}>
                <h1 className='sm:text-5xl text-4xl font-bold text-center'>Secara Online</h1>
                <Image draggable={false} className='rounded-2xl ' src={assets.online} alt='pengajian'  />
           </div>

           <div className=' flex flex-col gap-6 justify-center sm:p-12 p-8 rounded-2xl' style={{ backgroundColor: '#38b6ff33' }}>
           <h1 className='sm:text-5xl text-4xl font-bold text-center'>Secara Offline</h1>
                <Image draggable={false} className='rounded-2xl' src={assets.offline} alt='pengajian'  />
           </div>
        </div>


      </div>
    </div>
  );
}

export default Pengajian
