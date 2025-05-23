import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'



const Buku = () => {
  return (
    <div className='flex flex-col   min-h-[100vh] page1-bg pt-20'>
      <div className='flex flex-col gap-2 page1-content  min-h-[800px]'>
        <h1 className='sm:text-6xl text-4xl font-bold text-center bg-red-600 text-white p-5 '>Raikan Bersama Buku-Buku Terbaik BeDaie!</h1>

        <div className='flex sm:flex-row flex-col  justify-evenly  items-center '>
            <Image draggable={false} className='rounded-2xl' src={assets.buku_1} alt='pengajian' width={300} height={300}  />
            <Image draggable={false} className='rounded-2xl' src={assets.buku_2} alt='pengajian' width={300} height={300}  />
        </div>  

        <div className='flex flex-wrap gap-5  justify-evenly items-center '>
         
            <div className='flex flex-col'>
                <Image draggable={false} className='border border-black' src={assets.buku_3} alt='pengajian' width={250} height={250}  />
                <h2 className='md:text-2xl text-xl font-medium'>Safinatun Najah</h2>
                <p className='md:text-2xl text-xl text-red-600'>RM 10.00</p>
                <button className='bg-red-600 text-white md:text-2xl text-xl py-2 px-5 rounded-xl mt-2 '>Order Sekarang</button>
            </div>
            <div className='flex flex-col'>
                <Image draggable={false} className='border border-black' src={assets.buku_4} alt='pengajian' width={250} height={250}  />
                <h2 className='md:text-2xl text-xl font-medium'>Panduan Qadha Solat</h2>
                <p className='md:text-2xl text-xl text-red-600'>RM 15.00</p>
                <button className='bg-red-600 text-white md:text-2xl text-xl py-2 px-5 rounded-xl mt-2 '>Order Sekarang</button>
            </div>
            <div className='flex flex-col'>
                <Image draggable={false} className='border border-black' src={assets.buku_5} alt='pengajian' width={250} height={250}  />
                <h2 className='md:text-2xl text-xl font-medium'>Doa dan Wirid Harian</h2>
                <p className='md:text-2xl text-xl text-red-600'>RM 10.00</p>
                <button className='bg-red-600 text-white md:text-2xl text-xl py-2 px-5 rounded-xl mt-2 '>Order Sekarang</button>
            </div>

        </div>  

       


      </div>
    </div>
  );
}

export default Buku
