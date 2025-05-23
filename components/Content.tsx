import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';


const Content = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] page1-bg pt-5'>
      <div className='flex flex-col gap-5 page1-content'>
        <h1 className='sm:text-7xl text-4xl font-bold text-center'>Kenapa perlu belajar dengan kami?</h1>
        <p className='sm:text-4xl text-xl font-medium text-center'>Sentiasa mendengar masalah pelajar</p>


        <div className='border border-black canva-gradient'>
            <div className='p-4 flex flex-row gap-4 items-center m-8 '>
                <div className=''><Image src={assets.tick} alt='tick' className='md:min-w-[70px] min-w-[50px]'/></div>
                <h2 className='md:text-4xl text-xl'>Kelas dijalankan secara individu sama ada dirumah atau online secara 1-on-1</h2>
            </div>  
            <div className='p-4 flex flex-row gap-4 items-center m-8' >
                <div className=''><Image src={assets.tick} alt='tick' className='md:min-w-[70px] min-w-[50px]'  /></div>
                <h2 className='md:text-4xl text-xl'>Setiap guru kami bertauliah dan berlatarbelakangkan Pengajian Islam & Al-Quran</h2>
            </div>  
            <div className='p-4 flex flex-row gap-4 items-center m-8 '>
                <div className=''><Image src={assets.tick} alt='tick' className='md:min-w-[70px] min-w-[50px]' /></div>
                <h2 className='md:text-4xl text-xl'>Tentukan sendiri jadual mengaji mengikut waktu lapang dan kesenangan anda</h2>
            </div>  
            <div className='p-4 flex flex-row gap-4 items-center m-8 '>
                <div className=''><Image src={assets.tick} alt='tick' className='md:min-w-[70px] min-w-[50px]' /></div>
                <h2 className='md:text-4xl text-xl'>Pakej Yuran belajar yang mampu milik untuk semua orang</h2>
            </div>  
            <div className='p-4 flex flex-row gap-4 items-center m-8 '>
                <div className=''><Image src={assets.tick} alt='tick' className='md:min-w-[70px] min-w-[50px]' /></div>
                <h2 className='md:text-4xl text-xl'>Boleh belajar secara berkumpulan atau berpasangan</h2>
            </div>  
        </div>


      </div>
    </div>
  );
}

export default Content
