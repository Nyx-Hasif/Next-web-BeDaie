import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Ecosystem = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] page1-bg '>
      <div className='flex flex-col text-center gap-5 page1-content'>

        <h1 className='md:text-7xl text-5xl font-bold'>Interaktif Ekosistem</h1>
        <p className='text-3xl font-medium'>Student journey BeDaie</p>


        <div className='flex lg:flex-row flex-col justify-evenly items-center '>
          {/* kotak pertama */}
          <div className='p-4'><Image draggable={false} src={assets.ekosistem} alt='ekosistem' width={450} height={450} /></div>
            {/* kotak kedua */}
          <div className='p-4 '><Image draggable={false} src={assets.journey} alt='ekosistem' width={700} height={700} /></div>

            {/* kotak ketiga */}
            <div className='flex flex-col gap-5 p-4' >
              <div className='sm:max-w-[400px] text-xl p-2' style={{ backgroundColor: '#38b6ff50' }}>Pelajar akan dibimbing dari seawal belajar Iqra hingga ke Tadabbur al-Quran. Ekosistem yang interaktif dari guru yang terlatih.</div>
              
              <div className='flex flex-row gap-2 items-center border px-4 border-black w-[max-content] mx-auto' style={{ backgroundColor: '#38b6ff' }}>
                <FontAwesomeIcon icon={faCirclePlay} className='w-8 h-8 cursor-pointer' style={{color: "#e90707",}} />
                <p className=' text-xl p-2'> Tonton Sekarang</p>
              </div>
            </div>
          
        </div>

      </div>
    </div>
  )
}

export default Ecosystem
